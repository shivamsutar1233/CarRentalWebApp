import {
  Button,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
  useColorScheme,
} from "@mui/material";
import { NavLink } from "react-router";
import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { clearGlobalState } from "../../redux/slice/GlobalStateSlice";
const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [showSideBar, setShowSideBar] = useState(false),
    isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn),
    dispatch = useDispatch(),
    { mode, setMode } = useColorScheme();
  console.log(mode);
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
        <Link href={link} key={name} underline="none">
          {name}
        </Link>
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

  const getIdentityButtons = () => {
    return (
      <Fragment>
        {!isLoggedIn && (
          <Fragment>
            <ListItem>
              <NavLink to={"/Signin"}>
                <Button variant={"contained"} size="small">
                  Signin
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/Signup"}>
                <Button variant={"outlined"} size="small">
                  Signup
                </Button>
              </NavLink>
            </ListItem>
          </Fragment>
        )}
        {isLoggedIn && (
          <ListItem>
            <NavLink to={"/Signin"}>
              <Button
                variant={"contained"}
                size="small"
                onClick={() => handleSignout()}
              >
                Signout
              </Button>
            </NavLink>
          </ListItem>
        )}
      </Fragment>
    );
  };
  const handleSignout = () => {
    localStorage.clear();
    dispatch(clearGlobalState());
  };

  const handleApplicationTheme = () => {
    if (isDarkMode) {
      setMode("light");
    } else {
      setMode("dark");
    }
    setIsDarkMode((prev) => !prev);
  };

  const getApplicationThemeComponent = () => {
    return (
      <IconButton onClick={() => handleApplicationTheme()}>
        {isDarkMode ? <Brightness4Icon /> : <LightModeIcon />}
      </IconButton>
    );
  };

  return (
    <section
      className=" w-full  flex justify-between items-center px-6 py-4 z-10 absolute top-0
    "
    >
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
        <section className=" hidden md:flex items-center gap-6">
          {!isLoggedIn && (
            <Fragment>
              <NavLink to={"/Signin"}>
                <Button variant={"contained"} size="small">
                  Signin
                </Button>
              </NavLink>
              <NavLink to={"/Signup"}>
                <Button variant={"outlined"} size="small">
                  Signup
                </Button>
              </NavLink>
            </Fragment>
          )}
          {isLoggedIn && (
            <NavLink to={"/Signin"}>
              <Button
                variant={"contained"}
                size="small"
                onClick={() => handleSignout()}
              >
                Signout
              </Button>
            </NavLink>
          )}
        </section>
        <section className="hidden md:block">
          {getApplicationThemeComponent()}
        </section>
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
            <List className="block w-72 md:hidden">
              <section
                className="flex items-center p-2 "
                onClick={handleApplicationTheme}
              >
                {getApplicationThemeComponent()}{" "}
                <Typography variant="p" className=" cursor-pointer">
                  {isDarkMode ? "Dark theme" : "Light theme"}
                </Typography>
              </section>
              {<Divider />}
              {navLinksComponent()}
              {isLoggedIn && <Divider />}
              {isLoggedIn && protectedNavLinksComponent()}
            </List>
            <Divider />
            <List className="block w-72 md:hidden">
              {getIdentityButtons(0)}
            </List>
          </SwipeableDrawer>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
