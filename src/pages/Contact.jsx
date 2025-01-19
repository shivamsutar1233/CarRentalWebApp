import { Button, Icon, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    body: "",
  });
  return (
    <section className="pt-20  px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80 py-6 min-h-screen">
      <Typography
        variant="h4"
        className=" text-center flex justify-center items-center"
      >
        {" "}
        Contact{" "}
        <Typography variant="h4" color="secondary">
          .
        </Typography>
      </Typography>
      {/* cards container start */}
      <section className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between md:px-10 pt-10 gap-x-6">
        {/* First card */}
        <section className="flex flex-col w-full md:w-1/2 gap-6">
          <Typography variant="h5" className=" text-center flex items-center">
            Get In Touch{" "}
            <Typography variant="h5" color="secondary">
              .
            </Typography>
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. dolor sit amet consectetuer adipiscing
            elit. Lorem ipsum dolor sit amet consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. dolor sit amet consectetuer
            adipiscing elit. Lorem ipsum dolor sit amet consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. dolor sit amet consectetuer
            adipiscing elit.
          </Typography>
          <section className="flex flex-col gap-6">
            <section className="flex gap-4">
              <Icon className="!flex">
                <PlaceIcon />
              </Icon>
              <section className="flex flex-col gap-2">
                <Typography variant="p">Location</Typography>
                <Typography variant="p">Lorem ipsum dolor sit amet.</Typography>
              </section>
            </section>
            <section className="flex gap-4">
              <Icon className="!flex">
                <PhoneEnabledIcon />
              </Icon>
              <section className="flex flex-col gap-2">
                <Typography variant="p">Phone</Typography>
                <Typography variant="p">
                  {" "}
                  (+91) 9511XXXXXX | (021XX) 22X XXX
                </Typography>
              </section>
            </section>
            <section className="flex gap-4">
              <Icon className="!flex">
                <EmailIcon />
              </Icon>
              <section className="flex flex-col gap-2">
                <Typography variant="p">Email</Typography>
                <Typography variant="p">
                  {" "}
                  rentals@car-rental.alphasquare.in
                </Typography>
              </section>
            </section>
          </section>
        </section>
        {/* Second card */}
        <section className="flex flex-col w-full md:w-1/2 gap-6">
          <Typography variant="h5" className=" text-center flex items-center">
            Enquiry
            <Typography variant="h5" color="secondary">
              .
            </Typography>
          </Typography>
          <form
            // onSubmit={(e) => handleSubmit(e)}
            className="grid grid-cols-12 gap-8"
          >
            <TextField
              label="Name"
              className="col-span-full"
              variant="outlined"
            />
            <TextField
              label="Email"
              className="col-span-12 md:col-span-6"
              variant="outlined"
            />
            <TextField
              label="Mobile"
              className="col-span-12 md:col-span-6"
              variant="outlined"
            />
            <TextField
              label="Subject"
              className="col-span-12"
              variant="outlined"
            />

            <TextField
              label="Message"
              className="col-span-12"
              variant="outlined"
              multiline
            />
            <Button variant="contained" className="col-span-12 ">
              Send message
            </Button>
          </form>
        </section>
      </section>
      {/* GOOGLE MAPS FIELD */}
      <section className="w-full h-full p-5  ">
        <Typography
          variant="h5"
          className=" text-center flex items-center justify-center"
        >
          Reach us
          <Typography variant="h5" color="secondary">
            .
          </Typography>
        </Typography>
        {/* <section className=" md:p-5 h-full shadow-grey shadow-lg rounded-md w-full"> */}
        {/* <ContactMap /> */}
        {/* </section> */}
      </section>
    </section>
  );
};

export default Contact;
