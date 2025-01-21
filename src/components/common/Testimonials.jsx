import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
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
            <CardMedia
              component="img"
              className=" w-96 "
              image="https://i.ibb.co/Gs41NxR/testimonial.jpg"
              alt="testimonial"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="flex justify-between"
              >
                Alpha Sqaure
                <span>
                  <Rating
                    readOnly
                    defaultValue={Math.random() * 5}
                    precision={0.1}
                    size="small"
                  />
                </span>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                at et sequi perferendis quaerat cumque aut voluptatum vel
                doloribus distinctio earum consequatur dignissimos porro, eaque,
                rerum magnam ducimus ipsum enim, ipsa deserunt accusamus a
                exercitationem quis incidunt. Rerum, dolorem dolorum dignissimos
                id, saepe praesentium sit, cupiditate libero similique voluptate
                ea?
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
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
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
    <section className="px-4 sm:px-8 md:px-24 lg:px-28 xl:px-16 2xl:px-56 overflow-hidden py-6">
      <Typography
        variant="h5"
        className=" text-center flex justify-center items-center p-6"
      >
        Our happy customers
        <Typography variant="h4" color="secondary">
          .
        </Typography>
      </Typography>
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
