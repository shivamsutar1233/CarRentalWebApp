import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Verification from "./Verification";
import { useDispatch, useSelector } from "react-redux";
import { updateCompeleteProfileState } from "../../redux/slice/CompleteProfileSlice";
import { toast } from "react-toastify";

const VerifyEmail = ({ handleNext, handleBack, handleReset }) => {
  const { email, isEmailVerified } = useSelector(
    (state) => state?.completeProfile
  );
  const [OTP, setOTP] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isEmailVerified) toast.success("OTP sent successfully");
  }, []);
  const handleSubmit = () => {
    dispatch(
      updateCompeleteProfileState({ key: "isEmailVerified", value: true })
    );
    toast.success("Email verified successfully");
  };
  return (
    <section className=" flex flex-1 flex-col">
      <Typography variant="p">
        Let's quickly verify your email address
      </Typography>
      <section className="grid grid-cols-12 gap-6 mt-6">
        <Verification
          name={"Email"}
          value={email}
          disabled={true}
          setOTP={setOTP}
          OTP={OTP}
          handleSubmit={handleSubmit}
          isVerified={isEmailVerified}
        />
        <section className="col-span-12 flex justify-between">
          <Button
            variant="outlined"
            sx={{ textTransform: "none" }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={handleNext}
            disabled={!isEmailVerified}
          >
            Next
          </Button>
        </section>
      </section>
    </section>
  );
};

export default VerifyEmail;
