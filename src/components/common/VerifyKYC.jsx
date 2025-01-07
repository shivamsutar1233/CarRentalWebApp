import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import Verification from "./Verification";
import { useDispatch, useSelector } from "react-redux";
import { updateCompeleteProfileState } from "../../redux/slice/CompleteProfileSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const VerifyKYC = ({ handleNext, handleBack, handleReset }) => {
  const { kycType } = useSelector((state) => state?.completeProfile);
  const completeProfileState = useSelector((state) => state?.completeProfile);
  const dispatch = useDispatch();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [OTP, setOTP] = useState(null);
  const kycOptions = [
    {
      id: 100,
      label: "Addhar Id",
      value: "addharNumber",
    },
    {
      id: 101,
      label: "Pan Id",
      value: "panNumber",
    },
    {
      id: 102,
      label: "Driving license",
      value: "drivingLicenseNumber",
    },
  ];

  // console.log(completeProfileState);

  // const panRegex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";

  // const renderError = () => {
  //   return (
  //     completeProfileState[kycType?.value] !== "" &&
  //     !regexForMobile.test(completeProfileState[kycType?.value])
  //   );
  // };

  // const getErrorMessage = () => {
  //   switch (completeProfileState[kycType?.value]) {
  //     case kycOptions[0].value:
  //       return "Enter valid addhar number";
  //     case kycOptions[1].value:
  //       return "Enter valid pan number";
  //   }
  // };

  // const getRegexForInput = () => {
  //   switch (completeProfileState[kycType?.value]) {
  //     case kycOptions[0].value:
  //       return "";
  //     case kycOptions[1].value:
  //       return panRegex;
  //   }
  // };
  // const renderErrorMessage = () => {
  //   return completeProfileState[kycType?.value] !== "" &&
  //     !getRegexForInput().test(completeProfileState[kycType?.value])
  //     ? getErrorMessage()
  //     : "";
  // };

  // const getInputFormatter = (value) => {
  //   switch (completeProfileState[kycType?.value]) {
  //     case kycOptions[0].value:
  //       return value
  //         .replace(/\D/g, "")
  //         .split(/(?:([\d]{4}))/g)
  //         .filter((s) => s.length > 0)
  //         .join("-");
  //     case kycOptions[1].value:
  //       return "";
  //   }
  // };

  // const getInputAllowableLettersAndDigits = (e) => {
  //   // console.log();
  //   switch (completeProfileState[kycType?.value]) {
  //     case kycOptions[0].value:
  //       return e, target.value.replace(/[^0-9]/g, "");
  //     case kycOptions[1].value:
  //       return "";
  //   }
  // };

  const handleSubmit = () => {
    dispatch(
      updateCompeleteProfileState({ key: "isKycVerified", value: true })
    );
    toast.success("Kyc verified successfully");
  };

  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">Let's quickly verify your kyc</Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <section className="col-span-12">
          <Autocomplete
            disablePortal
            options={kycOptions}
            disabled={completeProfileState.isKycVerified}
            // sx={{ width: "22rem" }}
            componentName="kycType"
            defaultValue={kycType}
            onChange={(e, value) =>
              dispatch(updateCompeleteProfileState({ key: "kycType", value }))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select preffered proof type"
                className="col-span-12"
              />
            )}
            // error={renderError}
            // helperText={renderErrorMessage}
          />
        </section>
        <Verification
          label={kycType?.label}
          name={kycType?.value}
          value={completeProfileState[kycType?.value]}
          // slotProps={{
          //   htmlInput: {
          //     maxLength: 14,
          //   },
          // }}
          disabled={completeProfileState.isKycVerified}
          executeSendOtp={false}
          onOtpSend={() => setIsOtpSent(true)}
          buttonLabel={isOtpSent ? "Resend Otp" : "Send Otp"}
          onChange={(e) =>
            dispatch(
              updateCompeleteProfileState({
                key: e.target.name,
                value: e.target.value,
              })
            )
          }
          setOTP={setOTP}
          OTP={OTP}
          handleSubmit={handleSubmit}
          isVerified={completeProfileState.isKycVerified}
          // onInput={(e) => {
          // console.log(getInputAllowableLettersAndDigits(e));
          // e.target.value =
          // completeProfileState[kycType?.value] === kycOptions[0].value
          //   ? e.target.value.replace(/[^0-9]/g, ""):
          //     e.target.value;
          // }}
        />
        <section className="col-span-12 flex justify-between">
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Finish
          </Button>
        </section>
      </section>
    </section>
  );
};

export default VerifyKYC;
