import { Box, Divider, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "styled-components";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DeckIcon from "@mui/icons-material/Deck";
import GroupIcon from "@mui/icons-material/Group";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Cars from "./Cars";
import Bookings from "./Bookings";
import BookingLayout from "../components/Bookings/BookingLayout";
import OwnerBookings from "../components/Bookings/OwnerBookings";
import OwnerCars from "../components/Cars/OwnerCars";
import DriversList from "../components/Users/DriversList";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [currentOption, setCurrentOption] = useState(1);
  const handleDrawerOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: <DashboardIcon />,
      component: <></>,
    },
    {
      id: 2,
      title: "Bookings",
      icon: <DeckIcon />,
      component: <OwnerBookings />,
    },
    {
      id: 3,
      title: "Cars",
      icon: <PrecisionManufacturingIcon />,
      component: <OwnerCars />,
    },
    {
      id: 4,
      title: "Drivers",
      icon: <GroupIcon />,
      component: <DriversList />,
    },
  ];

  const handleOptionClick = (id) => {
    setCurrentOption(id);
    handleDrawerClose();
  };

  return (
    <section className="pt-24 h-screen flex relative">
      {/* Drawer start here */}
      <Divider />
      <StyledLeftNav
        onClick={handleDrawerClose}
        className={`${
          open ? "w-full" : "w-10"
        } shadow-xl z-10 absolute left-0 transition-all duration-500 overflow-hidden h-full !border-r-[solid] border-red-200`}
      >
        <Box
          sx={{ backgroundColor: theme.palette.background.default }}
          className={`${
            open ? "w-40" : "w-10"
          } absolute left-0 transition-all duration-500 overflow-hidden h-full `}
        >
          <section className=" flex justify-end">
            {!open ? (
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            )}
          </section>
          <section>
            {navItems.map(({ id, title, icon }) => (
              <section key={id} className="flex items-center justify-start ">
                <section>
                  <IconButton
                    title={title}
                    onClick={() => handleOptionClick(id)}
                  >
                    {icon}
                  </IconButton>
                </section>
                <section>{title}</section>
              </section>
            ))}
            <Divider />
          </section>
        </Box>
      </StyledLeftNav>
      <section className="ml-10 w-full px-2">
        <DashboardHeader
          title={navItems.find((item) => item.id === currentOption).title}
        />
        <section>
          {navItems.find((item) => item.id === currentOption).component}
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
const StyledLeftNav = styled.section`
  .right-border {
    border-right: 1px solid #33323260;
  }
`;
