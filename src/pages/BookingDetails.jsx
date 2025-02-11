import {
  Autocomplete,
  Button,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { images } from "../util/UtilityFunctions";
import { useGetCarByIdQuery } from "../redux/api/CarApi";
import CarDetails from "../components/common/CarDetails";
import { useGetBookingByIdQuery } from "../redux/api/BookingApi";
import { LoadingButton } from "@mui/lab";
import { displayRazorPay } from "../components/common/PaymentGateway";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import { Controller, useForm } from "react-hook-form";
import { drivers } from "../resources/en-us";
const BookingsDetails = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const carId = searchParams.get("carId");
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetCarByIdQuery(carId);
  const Booking = useGetBookingByIdQuery(bookingId);
  console.log("Booking", Booking);

  const handleSubmit = (paymentId) => {
    setIsPaymentLoading(false);
  };

  const getPaymentStatus = (status) => {
    return status === "Completed"
      ? "success"
      : status === "Pending"
      ? "info"
      : "error";
  };

  const getBookingStatus = (status) => {
    return status === "Confirmed"
      ? "success"
      : status === "Pending"
      ? "info"
      : "error";
  };

  const { register, handleFormSubmit, control, reset, setValue } = useForm({});
  return (
    <section className="pt-20 px-6 py-6 ">
      <section className=" ">
        <section className="w-full m-0 mb-0">
          <Typography
            variant="h4"
            className=" text-center flex justify-center items-center"
          >
            {" "}
            Booking details{" "}
            <Typography variant="h4" color="secondary">
              .
            </Typography>
          </Typography>
        </section>
        <section>
          <CarDetails data={data} images={images} />
        </section>
        <section className=" relative">
          {/* BOOKING DETAILS section  */}
          <section className=" w-full py-2 flex flex-col">
            <Typography variant="p" className=" flex  item-center">
              Name: <span className=" ">Shivam Ashok Sutar</span>
            </Typography>
            <Typography variant="p" className=" flex  item-center">
              Mobile Number: <span className=" ">+91-9238322323</span>
            </Typography>
            <Typography variant="p" className=" flex  item-center">
              Email Id: <span className=" ">user@alphasquare.in</span>
            </Typography>
          </section>
          <section className=" w-full py-2 flex flex-col md:flex-row justify-between  md:items-center items-start ">
            <Typography variant="p" className=" flex items-center">
              Booking Id: <span className=" ">{Booking?.data?.id}</span>
            </Typography>
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isPaymentLoading}
              onClick={() => {
                setIsPaymentLoading(true);
                displayRazorPay(3500, (paymentId) => handleSubmit(paymentId));
              }}
              startIcon={<CurrencyRupeeSharpIcon />}
            >
              Pay 3500
            </LoadingButton>
          </section>
          <section className="flex flex-wrap py-2">
            <section className=" min-h-fit flex flex-col w-1/2 md:w-[25%] border p-2">
              <h4 className=" self-start text-lg p-1">FROM</h4>
              <h5 className=" self-start text-2xl p-1 font-semibold overflow-clip">
                {Booking?.data?.pickupAddress}
              </h5>
            </section>
            <section className=" min-h-fit flex flex-col w-1/2 md:w-[25%] border p-2">
              <h4 className=" self-start text-lg p-1">TO</h4>
              <h5 className=" self-start text-2xl p-1 font-semibold ">
                {Booking?.data?.dropAddress}
              </h5>
            </section>
            <section className=" min-h-fit flex flex-col w-1/2 md:w-[25%] border p-2">
              <h4 className=" self-start text-lg p-1">DEPARTURE</h4>
              <h5 className=" self-start text-2xl p-1 font-semibold">
                {Booking?.data?.startDate.toString().split("T")[0]}

                <h4 className="text-xl text-gray-600">
                  {
                    days[
                      new Date(
                        Booking?.data?.startDate.toString().split("T")[0]
                      ).getDay()
                    ]
                  }
                </h4>
              </h5>
            </section>
            <section className=" min-h-fit flex flex-col w-1/2 md:w-[25%] border p-2">
              <h4 className=" self-start text-lg p-1">RETURN</h4>
              <h5 className=" self-start text-2xl p-1 font-semibold">
                {Booking?.data?.endDate.toString().split("T")[0]}
                <h4 className="text-xl text-gray-600">
                  {
                    days[
                      new Date(
                        Booking?.data?.endDate.toString().split("T")[0]
                      ).getDay()
                    ]
                  }
                </h4>
              </h5>
            </section>
          </section>
          <section className="w-full flex flex-wrap  items-center py-2">
            <Typography variant="h6" className="p-2 w-full md:w-1/2 py-1">
              Booking Status:{" "}
              <Chip
                label={Booking?.data?.bookingStatus}
                variant="outlined"
                color={getBookingStatus(Booking?.data?.bookingStatus)}
              />
            </Typography>

            <Typography variant="h6" className="p-2 w-full md:w-1/2 py-1">
              Booking Type:{" "}
              <Chip label={"BookingInfo.bookingType"} variant="outlined" />
            </Typography>
            <Typography variant="h6" className="p-2 w-full md:w-1/2 py-1">
              Payment Status:{" "}
              <Chip
                label={Booking?.data?.paymentStatus}
                variant="outlined"
                color={getPaymentStatus(Booking?.data?.paymentStatus)}
              />
            </Typography>
            <Typography variant="h6" className="p-2 w-full md:w-1/2 py-1">
              Transaction Id:{" "}
              <Chip label={"BookingInfo.transactionId"} variant="outlined" />
            </Typography>
          </section>
          <section className=" w-full py-2 flex flex-col justify-start ">
            <section
              className={`
                    flex flex-col justify-start items-start `}
            >
              <Typography variant="p" className=" flex items-center">
                Driver Name: <span className=" ">Alpha Square</span>
              </Typography>
              <Typography variant="p" className=" flex items-center">
                Mobile Number: <span className=" ">+91-98263XXXXX</span>
              </Typography>
              <Typography variant="p" className=" flex items-center">
                License Number: <span className=" ">ss@sstechlab.in</span>
              </Typography>
            </section>
            <section
              className={` flex flex-col md:flex-row justify-start gap-2 py-2`}
            >
              <Controller
                name="drivers"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <Autocomplete
                    disablePortal
                    options={drivers}
                    // disabled={isLoading}
                    sx={{ minWidth: "20rem" }}
                    onChange={(e, value) => onChange(value.value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...register("drivers", {})}
                        label="Select driver"
                        className=" flex-1 col-span-12 md:col-span-6"
                        required
                      />
                    )}
                  />
                )}
              />
              <Button
                variant="contained"
                size="large"
                //   onClick={() => handleAssignDriver()}
              >
                Assign Driver
              </Button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default BookingsDetails;
