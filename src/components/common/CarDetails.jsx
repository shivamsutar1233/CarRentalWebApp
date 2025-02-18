import { Grid2, List, ListItem, Typography } from "@mui/material";
import React from "react";
import StyledCarousel from "./Carousel";
import Render3DModel from "./Render3DModel";

const CarDetails = ({ data, images }) => {
  const CarouselItem = (item) => {
    return <Render3DModel name={item?.heading} />;
  };
  return (
    <Grid2 container>
      <Grid2 size={{ md: 8 }}>
        <StyledCarousel
          data={images}
          interval={null}
          CarouselItem={CarouselItem}
        />
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
  );
};

export default CarDetails;
