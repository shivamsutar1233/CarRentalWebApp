import { useSearchParams } from "react-router";
import { useGetCarByIdQuery } from "../redux/api/CarApi";
import StyledCarousel from "../components/common/Carousel";
import { images } from "../util/UtilityFunctions";
import {
  Checkbox,
  FormControlLabel,
  Grid2,
  List,
  ListItem,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import { Fragment, useState } from "react";
import { LoadingButton } from "@mui/lab";

const BookCar = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("carId"));
  const carId = searchParams.get("carId");
  const { data, isLoading } = useGetCarByIdQuery(carId);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  return (
    <section className=" pt-20 p-6">
      {isLoading ? (
        getLoadingBookCar()
      ) : (
        <Fragment>
          <Grid2 container>
            <Grid2 size={{ md: 8 }}>
              <StyledCarousel data={images} interval={null} />
            </Grid2>
            <Grid2>
              <Typography variant="p" className=" p-3 font-semibold">
                Car details
              </Typography>
              <List>
                <ListItem className=" font-semibold">
                  Make:
                  <Typography variant="p" className=" font-medium">
                    {data?.make}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Model:
                  <Typography variant="p" className=" font-medium">
                    {data?.model}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Transmission:
                  <Typography variant="p" className=" font-medium">
                    {data?.transmission}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Mileage:
                  <Typography variant="p" className=" font-medium">
                    {data?.mileage}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Price/day:
                  <Typography variant="p" className=" font-medium">
                    {data?.pricePerDay}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Fuel type:
                  <Typography variant="p" className=" font-medium">
                    {data?.fuelType}
                  </Typography>
                </ListItem>
                <ListItem className=" font-semibold">
                  Car type:
                  <Typography variant="p" className=" font-medium">
                    {data?.carType}
                  </Typography>
                </ListItem>
              </List>
            </Grid2>
          </Grid2>
          {/* Booking Form */}
          <Grid2 container component={"form"} spacing={2} className="py-6 ">
            <Grid2 size={6}>
              <TextField
                label="Pickup address"
                variant="outlined"
                className=" w-full"
                required
              />
            </Grid2>
            <Grid2 size={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Pickup date and time"
                  className=" w-full"
                />
              </LocalizationProvider>
            </Grid2>
            <Grid2 size={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={isRoundTrip}
                    onChange={() => setIsRoundTrip(!isRoundTrip)}
                  />
                }
                label="Is this roundtrip"
              />
            </Grid2>
            {!isRoundTrip && (
              <Grid2 size={6}>
                <TextField
                  label="Drop address"
                  variant="outlined"
                  className=" w-full"
                  required
                />
              </Grid2>
            )}
            {!isRoundTrip && (
              <Grid2 size={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Drop date and time"
                    className=" w-full"
                  />
                </LocalizationProvider>
              </Grid2>
            )}
            <section className=" flex justify-end w-full">
              <LoadingButton
                variant="contained"
                type="submit"
                startIcon={<CurrencyRupeeSharpIcon />}
              >
                Pay 3500
              </LoadingButton>
            </section>
          </Grid2>
        </Fragment>
      )}
    </section>
  );
};

export default BookCar;

const getLoadingBookCar = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ md: 8, xs: 12 }}>
        <Skeleton
          sx={{ height: "30rem", width: "auto" }}
          animation="wave"
          variant="rectangular"
          className=" w-full"
        />
      </Grid2>
      <Grid2 size={{ md: 4, xs: 12 }}>
        <Skeleton
          sx={{ height: "30rem", width: "auto" }}
          animation="wave"
          variant="rectangular"
          className=" w-full"
        />
      </Grid2>

      <Grid2 size={12}>
        <Skeleton
          sx={{ height: "30rem", width: "auto" }}
          animation="wave"
          variant="rectangular"
          className=" w-full"
        />
      </Grid2>
    </Grid2>
  );
};
