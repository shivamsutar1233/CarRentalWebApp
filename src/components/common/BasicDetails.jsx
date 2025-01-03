import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCompeleteProfileState } from "../../redux/slice/CompleteProfileSlice";

const BasicDetails = ({ handleNext, handleBack, handleReset }) => {
  const { firstName, lastName, email, mobile } = useSelector(
    (state) => state?.completeProfile
  );
  const dispatch = useDispatch();
  var regexForMobile = /^[7-9][0-9]{9}$/;
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Please help us to understand your basic details
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <TextField
          label="First name"
          className="col-span-12 md:col-span-6 lg:col-span-6"
          value={firstName}
          name="firstName"
          onChange={(e) =>
            dispatch(
              updateCompeleteProfileState({
                key: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        <TextField
          label="Last name"
          className="col-span-12 md:col-span-6 lg:col-span-6"
          value={lastName}
          name="lastName"
          onChange={(e) =>
            dispatch(
              updateCompeleteProfileState({
                key: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        <TextField
          label="Email"
          className="col-span-12 md:col-span-6 lg:col-span-6"
          value={email}
          name="email"
          onChange={(e) =>
            dispatch(
              updateCompeleteProfileState({
                key: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        <TextField
          label="Mobile number"
          className="col-span-12 md:col-span-6 lg:col-span-6"
          value={mobile}
          name="mobile"
          error={mobile !== "" && !regexForMobile.test(mobile)}
          slotProps={{
            htmlInput: {
              maxLength: 10,
            },
          }}
          helperText={
            mobile !== "" && !regexForMobile.test(mobile)
              ? "Please enter valid mobile number"
              : ""
          }
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
          type="text"
          onChange={(e) =>
            dispatch(
              updateCompeleteProfileState({
                key: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        {/* <Button onClick={handleBack}>Back</Button> */}
        <section className="col-span-12 flex justify-end">
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </section>
      </section>
    </section>
  );
};

export default BasicDetails;
