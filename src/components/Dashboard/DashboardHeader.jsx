import { Typography } from "@mui/material";
import React from "react";

const DashboardHeader = ({ title }) => {
  return (
    <Typography
      variant="h6"
      className=" text-center flex justify-center items-center"
    >
      {title}
      <Typography variant="h6" color="secondary">
        .
      </Typography>
    </Typography>
  );
};

export default DashboardHeader;
