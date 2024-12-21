import {
  Button,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
} from "@mui/material";
import { NavLink } from "react-router";
import { StyledButton } from "./Button";
import { Fragment, useMemo, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { clearGlobalState } from "../../redux/slice/GlobalStateSlice";
const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [showSideBar, setShowSideBar] = useState(false),
    isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn),
    dispatch = useDispatch();

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
    {
      name: "Cars",
      link: "/Cars",
    },
  ];

  const protectedNavLinks = [
    {
      name: "Bookings",
      link: "/Bookings",
    },
  ];
  const navLinksComponent = () => {
    return navLinks.map(({ link, name }) => (
      <ListItem key={name}>
        <NavLink to={link} key={name}>
          {name}
        </NavLink>
      </ListItem>
    ));
  };
  const protectedNavLinksComponent = () => {
    return protectedNavLinks.map(({ link, name }) => (
      <ListItem key={name}>
        <NavLink to={link} key={name}>
          {name}
        </NavLink>
      </ListItem>
    ));
  };

  const handleSignout = () => {
    localStorage.clear();
    dispatch(clearGlobalState());
  };
  return (
    <section className=" flex justify-between items-center px-6 py-4 ">
      <section className=" text-2xl font-bold cursor-pointer leading-none  ">
        Rentals<span className=" text-cyan-800 dark:text-yellow-400">.</span>
      </section>
      <section className="flex text ">
        <nav className="hidden md:flex md:gap-6">
          {navLinksComponent()}
          {isLoggedIn && protectedNavLinksComponent()}
        </nav>
      </section>
      <section className=" flex gap-6 items-center">
        {!isLoggedIn && (
          <Fragment>
            <NavLink to={"/Signin"}>
              <StyledButton variant={"contained"} size="small">
                Signin
              </StyledButton>
            </NavLink>
            <NavLink to={"/Signup"}>
              <StyledButton variant={"outlined"} size="small">
                Signup
              </StyledButton>
            </NavLink>
          </Fragment>
        )}
        {isLoggedIn && (
          <NavLink to={"/Signin"}>
            <StyledButton
              variant={"contained"}
              size="small"
              onClick={() => handleSignout()}
            >
              Signout
            </StyledButton>
          </NavLink>
        )}
        <IconButton onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? (
            <DarkModeIcon className=" dark:fill-slate-400" />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        <section className="block md:hidden">
          <IconButton onClick={() => setShowSideBar(true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            key={"right"}
            open={showSideBar}
            onClose={() => setShowSideBar(false)}
            onOpen={() => setShowSideBar(true)}
            className=""
          >
            <List className="block w-72 md:hidden">{navLinksComponent()}</List>
          </SwipeableDrawer>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
