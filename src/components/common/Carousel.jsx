import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Render3DModel from "./Render3DModel";
import { Image } from "react-bootstrap";
import { Typography } from "@mui/material";
export default function StyledCarousel({ data, interval }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const getCarouselItem = (item) => {
    return (
      <Carousel.Item key={item.heading} interval={10000}>
        <section className=" w-full object-cover aspect-video ">
          <Render3DModel name={item.heading} />
        </section>
        <Carousel.Caption>
          <Typography variant="h5">{item.heading}</Typography>
          <Typography variant="p">{item.description}</Typography>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={interval}>
      {data?.map((item) => getCarouselItem(item))}
    </Carousel>
  );
}
