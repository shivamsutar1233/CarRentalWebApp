import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid2,
  IconButton,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import LocalGasStationSharpIcon from "@mui/icons-material/LocalGasStationSharp";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const StyledCard = ({ car, handleBooking, onEditCarClick }) => {
  const {
    make,
    model,
    year,
    pricePerDay,
    mileage,
    transmission,
    isAvailable,
    fuelType,
    carType,
    id,
  } = car;
  const roles = useSelector(
    (state) => state?.globalState?.userPreferences?.roles
  );
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={() => console.log("Primary action")}>
        <CardMedia
          component="img"
          className=" h-[15rem] w-[15rem]"
          image="https://i.ibb.co/wYrLLNR/demo-car.jpg"
          alt="car-image"
        />
        <CardContent>
          <Grid2 container>
            <Grid2
              size="grow"
              sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Chip
                label={year}
                size="small"
                className="p-2"
                variant="outlined"
              />
              <Rating
                readOnly
                defaultValue={Math.random() * 5}
                precision={0.1}
                size="small"
              />
            </Grid2>
            <Grid2>
              <Chip
                icon={<CurrencyRupeeSharpIcon />}
                label={pricePerDay + "/day"}
                color="primary"
                size="small"
                className="p-2"
              />
            </Grid2>
          </Grid2>
          <Typography
            gutterBottom
            variant="h6"
            component="section"
            className=" pt-2"
          >
            {make + " " + model}
          </Typography>
          <Grid2 container direction={"row"} rowSpacing={2} columnSpacing={2}>
            <Chip
              icon={<LocalGasStationSharpIcon />}
              label={fuelType}
              size="small"
              className="p-2"
              variant="outlined"
            />
            <Chip
              label={transmission}
              size="small"
              className="p-2"
              variant="outlined"
            />
            <Chip
              label={mileage + "/ltr"}
              size="small"
              className="p-2"
              variant="outlined"
            />
            <Chip
              label={carType}
              size="small"
              className="p-2"
              variant="outlined"
            />
          </Grid2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <section className=" flex justify-between items-center w-full">
          <Button
            size="small"
            color="primary"
            onClick={() => handleBooking(id)}
          >
            Book now
          </Button>
          {roles?.includes("Admin") && (
            // <a href={`/CreateEditCar?carId=${id}`} target="_blank">
            <IconButton onClick={() => onEditCarClick(id)}>
              <EditIcon />
            </IconButton>
            // </a>
          )}
        </section>
      </CardActions>
    </Card>
  );
};

export default StyledCard;

const CardLoading = () => {
  return (
    <Card>
      <CardActionArea onClick={() => console.log("Primary action")}>
        <Skeleton
          className=" h-[15rem] w-[15rem]"
          sx={{ height: "15rem", width: "auto" }}
          animation="wave"
          variant="rectangular"
        />
        <CardContent>
          <Grid2 container>
            <Grid2 size="grow">
              <Skeleton
                sx={{ height: "1.5rem", width: "10rem" }}
                animation="wave"
                variant="rectangular"
              />
            </Grid2>
            <Grid2>
              <Skeleton
                sx={{ height: "1.5rem", width: "10rem" }}
                animation="wave"
                variant="rectangular"
              />
            </Grid2>
          </Grid2>
          <Skeleton
            sx={{ height: "1.5rem", width: "auto", marginTop: "0.5rem" }}
            animation="wave"
            variant="rectangular"
          />
          <Grid2 container direction={"row"} rowSpacing={2} columnSpacing={2}>
            <Skeleton
              sx={{ height: "2rem", width: "10rem", marginTop: "0.5rem" }}
              animation="wave"
              variant="rectangular"
            />
          </Grid2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton
          sx={{ height: "2rem", width: "100%" }}
          animation="wave"
          variant="rectangular"
        />
      </CardActions>
    </Card>
  );
};
export { CardLoading };
