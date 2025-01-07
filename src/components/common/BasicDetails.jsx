import { Button, Skeleton, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialProfileState,
  updateCompeleteProfileState,
} from "../../redux/slice/CompleteProfileSlice";
import { Fragment, useEffect } from "react";
import { useLazyGetUserPreferencesQuery } from "../../redux/api/IdentityApi";
import { setUserPreferences } from "../../redux/slice/GlobalStateSlice";

const BasicDetails = ({ handleNext }) => {
  const [getUserPreferences, { data, isLoading }] =
    useLazyGetUserPreferencesQuery();
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state?.completeProfile
  );
  const userPreferences = useSelector(
    (state) => state?.globalState?.userPreferences
  );

  useEffect(() => {
    if (Object.keys(userPreferences).length == 0 && !data) {
      getUserPreferences();
    } else if (data) {
      dispatch(setUserPreferences(data));
    }
  }, [data]);

  useEffect(() => {
    if (userPreferences) {
      dispatch(
        setInitialProfileState({
          ...userPreferences,
        })
      );
    }
  }, [userPreferences]);

  const loadingSkeleton = () => {
    return (
      <Fragment>
        <Skeleton
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6 lg:col-span-6"
        />
        <Skeleton
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6 lg:col-span-6"
        />
        <Skeleton
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6 lg:col-span-6"
        />
        <Skeleton
          height={"5.5rem"}
          className=" col-span-12 md:col-span-6 lg:col-span-6"
        />
      </Fragment>
    );
  };

  const getInputFields = () => {
    return (
      <Fragment>
        <TextField
          label="First name"
          className="col-span-12 md:col-span-6 lg:col-span-6"
          value={firstName}
          name="firstName"
          required
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
          required
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
          disabled
          required
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
          value={phoneNumber}
          // defaultValue={userPreferences?.phoneNumber}
          name="phoneNumber"
          required
          slotProps={{
            htmlInput: {
              maxLength: 10,
            },
          }}
          error={phoneNumber !== "" && !regexForphoneNumber.test(phoneNumber)}
          helperText={
            phoneNumber !== "" && !regexForphoneNumber.test(phoneNumber)
              ? "Please enter valid phoneNumber number"
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
      </Fragment>
    );
  };
  const dispatch = useDispatch();
  var regexForphoneNumber = /^[7-9][0-9]{9}$/;
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Please help us to understand your basic details
      </Typography>
      <form className="grid grid-cols-12 gap-6 mt-6" onSubmit={handleNext}>
        {isLoading ? loadingSkeleton() : getInputFields()}
        <section className="col-span-12 flex justify-end">
          <Button
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
            disabled={isLoading}
          >
            Next
          </Button>
        </section>
      </form>
    </section>
  );
};

export default BasicDetails;
