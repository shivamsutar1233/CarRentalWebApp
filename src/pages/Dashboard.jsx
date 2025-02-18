import { Box, Divider, IconButton, useTheme } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "styled-components";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DeckIcon from "@mui/icons-material/Deck";
import GroupIcon from "@mui/icons-material/Group";
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(theme);
  const navItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      title: "Bookings",
      icon: <DeckIcon />,
    },
    {
      id: 3,
      title: "Cars",
      icon: <PrecisionManufacturingIcon />,
    },
    {
      id: 4,
      title: "Drivers",
      icon: <GroupIcon />,
    },
  ];
  return (
    <section className="pt-24 h-screen flex relative">
      {/* Drawer start here */}
      <Divider />
      <StyledLeftNav
        onClick={handleDrawerClose}
        className={`${
          open ? `w-full bg-[${theme.palette.background.paper}] ` : "w-10"
        } absolute left-0 transition-all duration-500 overflow-hidden h-full !border-r-[solid] border-red-200`}
      >
        <Box
          sx={{ backgroundColor: theme.palette.background.default }}
          className={`${
            open ? "w-40" : "w-10"
          } right-border absolute left-0 transition-all duration-500 overflow-hidden h-full `}
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
                  <IconButton title={title} onClick={handleDrawerClose}>
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
      <section className="ml-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
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
