import {
  Divider,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import BasicProfileDetails from "../components/common/BasicProfileDetails";
import ChangeEmail from "../components/common/ChangeEmail";
import ChangeMobile from "../components/common/ChangeMobile";
import { useNavigate } from "react-router";
import {
  clearGlobalState,
  setProfileElementAnchor,
} from "../redux/slice/GlobalStateSlice";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/images/2.jpg";
const Profile = () => {
  const userPreferences = useSelector(
    (state) => state?.globalState?.userPreferences
  );
  const profileAnchor = useSelector(
    (state) => state?.globalState?.profileAnchor
  );
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const activeClass = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  const profileSteps = [
    {
      id: 0,
      label: "Basic details",
    },
    {
      id: 1,
      label: "Change email",
    },
    {
      id: 2,
      label: " Change mobile",
    },
    {
      id: 3,
      label: "Change password",
    },
  ];
  const linkSteps = [
    {
      id: 10,
      label: " My bookings",
      link: "/Bookings",
      onClick: () => {},
    },
    {
      id: 11,
      label: "Signout",
      link: "/",

      onClick: () => handleSignout(),
    },
  ];
  const getActiveStepLabel = () => {
    return profileSteps.find((step) => step.id === activeStep).label;
  };

  const getActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <BasicProfileDetails />;
      case 1:
        return <ChangeEmail />;
      case 2:
        return <ChangeMobile />;
    }
  };
  const handleSignout = () => {
    localStorage.clear();
    dispatch(clearGlobalState());
  };
  return (
    <section className="pt-20 py-6">
      <Divider />
      <section
        className=" sm:px-6 md:px-12 lg:px-24 xl:48 2xl:px-96 flex flex-1  items-center gap-12 pb-20 pt-12"
        style={{
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <section className="h-[8rem] w-[8rem] ">
          <img className="!w-full !h-full rounded-full" src={img} />
          {/* <Icon className="!w-full !h-full !rounded-full">
            <AccountBoxIcon className="!w-full !h-full !rounded-full" />
          </Icon> */}
        </section>
        <section>
          <Typography variant="h6">
            {userPreferences.firstName && userPreferences?.firstName}{" "}
            {userPreferences.lastName && userPreferences?.lastName}
          </Typography>
        </section>
      </section>
      <Divider />
      <section className=" flex  flex-1 sm:px-6 md:px-12 lg:px-24 xl:48 2xl:px-96 justify-center items-start gap-6 relative py-2">
        <section className=" hidden md:block h-96 w-72">
          <List>
            {profileSteps.map((step) => (
              <ListItem
                className=" rounded-sm cursor-pointer"
                onClick={() => setActiveStep(step.id)}
                sx={activeStep === step.id && activeClass}
                key={step.id}
              >
                {step.label}
              </ListItem>
            ))}
            {linkSteps.map((step) => (
              <ListItem
                className=" rounded-sm cursor-pointer"
                onClick={() => {
                  step.onClick && step.onClick();
                  navigate(step.link);
                }}
                sx={activeStep === step.id && activeClass}
                key={step.id}
              >
                {step.label}
              </ListItem>
            ))}
          </List>
        </section>
        <section
          className=" flex flex-1 flex-col h-[35rem] relative -top-16 shadow-lg z-20"
          style={{ backgroundColor: theme.palette.background.default }}
        >
          <Typography
            variant="p"
            className="p-4"
            sx={{ color: theme.palette.primary.dark }}
          >
            {getActiveStepLabel()}
          </Typography>
          <Divider />
          <section className="p-4">{getActiveStep()}</section>
        </section>
      </section>
      <Menu
        anchorEl={profileAnchor}
        open={Boolean(profileAnchor)}
        onClose={() => dispatch(setProfileElementAnchor(null))}
        onClick={() => dispatch(setProfileElementAnchor(null))}
      >
        {profileSteps.map((step) => (
          <MenuItem
            className=" cursor-pointer"
            onClick={() => setActiveStep(step.id)}
            sx={activeStep === step.id && activeClass}
            key={step.id}
          >
            {step.label}
          </MenuItem>
        ))}
        {linkSteps.map((step) => (
          <MenuItem
            className=" cursor-pointer"
            onClick={() => {
              step.onClick && step.onClick();
              navigate(step.link);
            }}
            sx={activeStep === step.id && activeClass}
            key={step.id}
          >
            {step.label}
          </MenuItem>
        ))}
      </Menu>
    </section>
  );
};

export default Profile;
