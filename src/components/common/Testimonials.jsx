import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import {
  Card,
  CardActionArea,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const Testimonials = () => {
  const SingleCard = () => {
    return (
      <section className=" w-[99%]">
        <Card>
          <CardActionArea>
            <Icon>
              <AccountBoxRoundedIcon />
            </Icon>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Alpha Sqaure
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                ut corrupti enim earum fugiat necessitatibus odio. Id aliquid
                fugit nesciunt molestias magni ducimus voluptatibus?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </section>
    );
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // variableWidth: true,
    // centerMode: true,
    // infinite: true,
    // dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="px-4 sm:px-8 md:px-24 lg:px-28 xl:px-16 2xl:px-48">
      <Slider {...settings}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </Slider>
    </section>
  );
};

export default Testimonials;
