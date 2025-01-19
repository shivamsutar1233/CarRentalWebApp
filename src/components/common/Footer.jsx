import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider, IconButton, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
const Footer = () => {
  const getSocialMediaSection = () => {
    return (
      <section className=" flex items-center gap-2">
        <Typography variant="p" className="pr-2">
          Follow us
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </section>
    );
  };

  const getCompanySection = () => {
    return (
      <section className=" flex flex-col justify-between gap-2">
        <Typography variant="subtitle1" color={grey[500]}>
          Company
        </Typography>
        <Link underline="none" href={"/About"}>
          About
        </Link>
        <Link underline="none" href={"/Contact"}>
          Contact
        </Link>
        <Link underline="none" href={"/Cars"}>
          Cars
        </Link>
        <Link underline="none" href={"/Support"}>
          Support
        </Link>
      </section>
    );
  };

  const getCompanyNameSection = () => {
    return (
      <Typography
        variant="h5"
        color="primary"
        sx={{ fontWeight: 600 }}
        className=" flex"
      >
        Rentals
        <Typography variant="p" color="secondary" sx={{ fontWeight: 600 }}>
          .
        </Typography>
      </Typography>
    );
  };

  const getServicesSection = () => {
    return (
      <section className=" flex flex-col justify-between gap-2">
        <Typography variant="subtitle1" color={grey[500]}>
          Services
        </Typography>
        <Link underline="none" href={"#CityRides"}>
          City rides
        </Link>
        <Link underline="none" href={"#CityToCityRides"}>
          City to City rides
        </Link>
        <Link underline="none" href={"#CourierDelivery"}>
          Courier delivery
        </Link>
        <Link underline="none" href={"#FreightDelivery"}>
          Freight delivery
        </Link>
      </section>
    );
  };

  return (
    <footer className="px-4 py-6 flex flex-col gap-2 justify-between h-[20rem]">
      <section className=" grid grid-cols-12 ">
        <section className=" col-span-12 lg:col-span-3">
          {getCompanyNameSection()}
        </section>
        <section className=" col-span-6 lg:col-span-3">
          {getCompanySection()}
        </section>
        <section className=" col-span-6 lg:col-span-3">
          {getServicesSection()}
        </section>
        <section className=" col-span-12 lg:col-span-3">
          {getSocialMediaSection()}
        </section>
      </section>
      <Divider variant="middle" />
      <Typography variant="p" className=" text-center">
        {new Date().getFullYear()} Alpha Square Official. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
