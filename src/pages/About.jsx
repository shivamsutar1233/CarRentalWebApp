import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Icon, List, ListItem, Typography } from "@mui/material";
const About = () => {
  const DummyPara =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud eiusmod tempor incididunt.Loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam quis nostrud eiusmod tempor incididunt.Lorem ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam quis nostrud eiusmod tempor incididunt.Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam quis nostrud eiusmod tempor incididunt.";

  const ListofFeatures = [
    "Flexible & Cost-Effective",
    "Over 250,000 Clients",
    "Satisfaction Guarantee",
    "Home Pickup",
    "One Way Rental",
    "Convenient Location",
    "Satisfaction Guarantee",
    "Home Pickup",
    "One Way Rental",
    "Convenient Location",
  ];
  const FeatureRow = (props) => {
    return (
      <ListItem className=" flex items-center col-span-12 sm:col-span-6 gap-2">
        <Icon className="flex">
          <CheckCircleIcon className="!flex" />
        </Icon>

        <Typography variant="p">{props.Feature}</Typography>
      </ListItem>
    );
  };
  const AboutPara = (props) => {
    return <Typography variant="p">{props.Para}</Typography>;
  };
  return (
    <section className="pt-20  px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80 py-6 min-h-screen">
      <Typography
        variant="h4"
        className=" text-center flex justify-center items-center"
      >
        {" "}
        About{" "}
        <Typography variant="h4" color="secondary">
          .
        </Typography>
      </Typography>
      <Typography variant="h5">Who are we?</Typography>
      <Typography variant="h4" className=" text-center flex items-center">
        Trusted Car Rentals
        <Typography variant="h3">.</Typography>
      </Typography>
      <section>
        <AboutPara Para={DummyPara} />
        <List className=" grid flex-wrap grid-cols-12 ">
          {ListofFeatures.map((Feature) => (
            <FeatureRow Feature={Feature} key={Feature} />
          ))}
        </List>
      </section>
    </section>
  );
};

export default About;
