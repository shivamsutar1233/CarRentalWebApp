import {
  Divider,
  Icon,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
import BasicProfileDetails from "../components/common/BasicProfileDetails";
import ChangeEmail from "../components/common/ChangeEmail";
import ChangeMobile from "../components/common/ChangeMobile";
const Profile = () => {
  const [activeStep, setActiveStep] = useState(0);
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
    {
      id: 4,
      label: " My bookings",
    },
    {
      id: 5,
      label: "Signout",
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

  return (
    <section className="pt-20 py-6">
      <Divider />
      <section
        className=" px-[24rem] flex flex-1  items-center gap-12 pb-20 pt-12"
        style={{
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <section className="h-[8rem] w-[8rem]">
          <Icon className="!w-full !h-full">
            <AccountBoxIcon className="!w-full !h-full" />
          </Icon>
        </section>
        <section>
          <Typography variant="h6">Shivam Ashok Sutar</Typography>
        </section>
      </section>
      <Divider />
      <section className=" flex  flex-1 sm:px-6 md:px-12 lg:px-24 xl:48 2xl:px-96 justify-center items-start gap-6 relative py-2">
        <section className=" h-96 w-72">
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
    </section>
  );
};

export default Profile;
