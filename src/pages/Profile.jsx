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
const Profile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const activeClass = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
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
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(0)}
              sx={activeStep === 0 && activeClass}
            >
              Basic details
            </ListItem>
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(1)}
              sx={activeStep === 1 && activeClass}
            >
              Change email
            </ListItem>
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(2)}
              sx={activeStep === 2 && activeClass}
            >
              Change mobile
            </ListItem>
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(3)}
              sx={activeStep === 3 && activeClass}
            >
              Change password
            </ListItem>
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(4)}
              sx={activeStep === 4 && activeClass}
            >
              My bookings
            </ListItem>
            <ListItem
              className=" rounded-sm cursor-pointer"
              onClick={() => setActiveStep(5)}
              sx={activeStep === 5 && activeClass}
            >
              Signout
            </ListItem>
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
            Basic details
          </Typography>
          <Divider />
          <section className="p-4">
            <BasicProfileDetails />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Profile;
