import {
  Autocomplete,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  useLazyGetCarByIdQuery,
  useSaveCarMutation,
} from "../../redux/api/CarApi";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { carTypes, fuelTypes, transmissionTypes } from "../../resources/en-us";
import { useSearchParams } from "react-router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CarImagePreview from "../common/CarImagePreview";
import { put } from "@vercel/blob";
import { fileTypes } from "../../util/UIConstants";

const CreateEditCar = ({ open, setOpen, carId, isEdit, onClose }) => {
  const inputFileRef = useRef(null);
  const { register, handleSubmit, control, reset, setValue } = useForm({});
  const [getCarById, { isLoading: carLoading, data }] =
    useLazyGetCarByIdQuery();
  const [uploadedFileNames, setUploadedFileNames] = useState([]);
  const [isFilesUploading, setIsFilesUploading] = useState(false);
  const [saveCar, { isLoading }] = useSaveCarMutation();

  const getCarInfoById = async () => {
    await getCarById(carId);
  };

  useEffect(() => {
    if (isEdit && !carLoading && carId) {
      getCarInfoById();
    }
  }, []);

  const setInitialStateWhenEdit = (data) => {
    Object.entries(data).map(([key, value]) => setValue(key, value));
  };
  useEffect(() => {
    setInitialStateWhenEdit(data ?? {});
  }, [data]);

  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  const handleFileUpdload = async (event) => {
    event.preventDefault();
    const files = inputFileRef.current.files;
    let fileUploads = [];
    Object.values(files).map(
      (file) =>
        validFileType(file) &&
        fileUploads.push(
          put(`/cars/${file.name}`, file, {
            access: "public",
            token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN,
          })
        )
    );

    setIsFilesUploading(true);
    Promise.all(fileUploads).then((res) => {
      setIsFilesUploading(false);
      setUploadedFileNames((prev) => [...prev, ...res]);
    });
  };

  const loadingSkeleton = () => {
    return (
      <Fragment>
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6"
        />
        <Skeleton
          animation="wave"
          height={"4.5rem"}
          className=" col-span-12 "
        />
        <Skeleton
          animation="wave"
          height={"4.5rem"}
          className=" col-span-12 "
        />
      </Fragment>
    );
  };

  const getContent = () => {
    return (
      <Fragment>
        <TextField
          label="Model"
          {...register("model", {})}
          className=" flex-1 col-span-12 md:col-span-6"
          required
          disabled={isLoading || carLoading}
          slotProps={{
            inputLabel: {
              focused: true,
            },
          }}
        />
        <TextField
          label="Make"
          {...register("make", {})}
          className=" flex-1 col-span-12 md:col-span-6"
          required
          disabled={isLoading || carLoading}
        />
        <Controller
          name="year"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                label="Year"
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                className=" flex-1 col-span-12 md:col-span-6"
                required
                {...register("year", {})}
                disabled={isLoading || carLoading}
              />
            );
          }}
        />

        <section className=" flex-1 col-span-12 md:col-span-6">
          <Controller
            name="transmission"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Autocomplete
                disablePortal
                options={transmissionTypes}
                disabled={isLoading || carLoading}
                sx={{ width: "100%" }}
                onChange={(e, value) => onChange(value.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...register("transmission", {})}
                    label="Transmission"
                    className=" flex-1 col-span-12 md:col-span-6"
                    required
                  />
                )}
              />
            )}
          />
        </section>
        <Controller
          name="mileage"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                label="Mileage"
                className=" flex-1 col-span-12 md:col-span-6"
                required
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                {...register("mileage", {})}
                disabled={isLoading || carLoading}
              />
            );
          }}
        />
        <Controller
          name="pricePerDay"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                label="Price/day"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <CurrencyRupeeIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  },
                }}
                onChange={(e) => field.onChange(parseInt(e.target.value))}
                {...register("pricePerDay", {})}
                className=" flex-1 col-span-12 md:col-span-6"
                required
                disabled={isLoading || carLoading}
              />
            );
          }}
        />

        <section className=" flex-1 col-span-12 md:col-span-6">
          <Controller
            name="fuelType"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Autocomplete
                disablePortal
                options={fuelTypes}
                disabled={isLoading || carLoading}
                sx={{ width: "100%" }}
                onChange={(e, value) => onChange(value.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Fuel type"
                    {...register("fuelType", {})}
                    className=" flex-1 col-span-12 md:col-span-6"
                    required
                  />
                )}
              />
            )}
          />
        </section>
        <section className=" flex-1 col-span-12 md:col-span-6">
          <Controller
            name="carType"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <Autocomplete
                disablePortal
                options={carTypes}
                disabled={isLoading || carLoading}
                sx={{ width: "100%" }}
                onChange={(e, value) => onChange(value.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Car type"
                    {...register("carType", {})}
                    className=" flex-1 col-span-12 md:col-span-6"
                    required
                  />
                )}
              />
            )}
          />
        </section>
        <section className="flex-1 grid grid-cols-12 col-span-6">
          <input
            type="file"
            multiple
            className=" flex-1 col-span-12 md:col-span-6"
            disabled={isLoading || carLoading}
            ref={inputFileRef}
          />
          <LoadingButton
            onClick={handleFileUpdload}
            variant="outlined"
            type="submit"
            className=" flex-1 col-span-12 md:col-span-6"
            sx={{ textTransform: "none" }}
            loading={isFilesUploading}
            // disabled={
            //   isFilesUploading ||
            //   (inputFileRef.current?.files &&
            //     Object.keys(inputFileRef.current?.files)?.length == 0)
            // }
          >
            Upload
          </LoadingButton>
        </section>
        <section className=" col-span-full ">
          <CarImagePreview
            files={uploadedFileNames}
            setFiles={setUploadedFileNames}
          />
        </section>
        <section className="col-span-12 flex justify-end">
          <LoadingButton
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
            className="w-full"
            loading={isLoading}
            disabled={isLoading || carLoading}
          >
            Submit
          </LoadingButton>
        </section>
      </Fragment>
    );
  };

  const handleSaveCar = async (data) => {
    if (uploadedFileNames.length > 0) {
      data = {
        ...data,
        carImages: uploadedFileNames.reduce(
          (accumulator, currentValue) => [...accumulator, currentValue?.url],
          []
        ),
      };
    }
    !isEdit
      ? await saveCar(data)
          .then(() => {
            toast.success("Car saved successfully");
            reset();
            setUploadedFileNames([]);
          })
          .catch(() => {
            toast.error("Something went wrong, please try again later");
          })
      : await saveCar(data)
          .then(() => {
            toast.success("Car saved successfully");
            reset();
            setUploadedFileNames([]);
          })
          .catch(() => {
            toast.error("Something went wrong, please try again later");
          });
  };
  return (
    <React.Fragment>
      <Typography variant="p text-center">
        Please help us to understand your basic car details
      </Typography>
      <form
        className="grid grid-cols-12 gap-6 mt-6 justify-center items-center"
        onSubmit={handleSubmit(handleSaveCar)}
      >
        {carLoading ? loadingSkeleton() : getContent()}
      </form>
    </React.Fragment>
  );
};

export default CreateEditCar;
