import { useNavigate, useSearchParams } from "react-router";
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
import { Fragment, useRef, useState } from "react";
import { LoadingButton } from "@mui/lab";
import dayjs from "dayjs";
import { useSaveBookingMutation } from "../redux/api/BookingApi";
import { displayRazorPay } from "../components/common/PaymentGateway";
import CarDetails from "../components/common/CarDetails";
const BookCar = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("carId");
  const { data, isLoading } = useGetCarByIdQuery(carId);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [pAddress, setPAddress] = useState("");
  const [dAddress, setDAddress] = useState("");
  const [pDate, setPDate] = useState(dayjs(new Date()));
  const [dDate, setDDate] = useState(dayjs(new Date()));
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [saveBooking, { isLoading: saveLoading, data: saveData }] =
    useSaveBookingMutation();

  const handleSubmit = (paymentId) => {
    let data = {
      carId: carId,
      pickupAddress: pAddress,
      dropAddress: isRoundTrip ? pAddress : dAddress,
      startDate: pDate.toDate(),
      endDate: dDate.toISOString(),
      totalAmount: 3500,
    };
    setIsPaymentLoading(false);
    saveBooking(data).then(() => {
      navigate("/Bookings");
    });
  };

  return (
    <section className=" pt-20 p-6">
      {isLoading ? (
        getLoadingBookCar()
      ) : (
        <Fragment>
          <CarDetails data={data} images={images}/>
          {/* Booking Form */}
          <Grid2
            container
            component={"form"}
            spacing={2}
            className="py-6 "
            ref={formRef}
            action="javascript:void (0)"
            // onSubmit={() => }
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                label="Pickup address"
                variant="outlined"
                className=" w-full"
                required
                name="pickUpAddress"
                value={pAddress}
                disabled={saveLoading || isPaymentLoading}

                onChange={(e) => setPAddress(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  onChange={(e) => setPDate(e)}
                  value={pDate}
                  label="Pickup date and time"
                  className=" w-full"
                  disabled={saveLoading || isPaymentLoading}

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
                    disabled={saveLoading || isPaymentLoading}
                    
                  />
                }
                label="Is this roundtrip"
              />
            </Grid2>
            {!isRoundTrip && (
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Drop address"
                  variant="outlined"
                  className=" w-full"
                  required
                  value={dAddress}
                  onChange={(e) => setDAddress(e.target.value)}
                  disabled={saveLoading || isPaymentLoading}

                />
              </Grid2>
            )}
            {!isRoundTrip && (
              <Grid2 size={{ xs: 12, md: 6 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={(e) => setDDate(e)}
                    value={pDate}
                    label="Drop date and time"
                    className=" w-full"
                    disabled={saveLoading || isPaymentLoading}
                  />
                </LocalizationProvider>
              </Grid2>
            )}
            <section className=" flex justify-end w-full">
              <LoadingButton
                variant="contained"
                type="submit"
                loading={saveLoading || isPaymentLoading}
                onClick={() => {
                  setIsPaymentLoading(true);
                  displayRazorPay(3500, (paymentId) => handleSubmit(paymentId));
                }}
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
