import { Button, TextField } from "@mui/material";
import { Fragment, useCallback, useEffect, useState } from "react";

const Verification = ({
  name,
  disabled,
  value,
  onInput,
  slotProps,
  onChange,
  label,
  setOTP,
  OTP,
  handleSubmit,
  isVerified,
  buttonLabel = "Resend OTP",
  executeSendOtp = true,
  onOtpSend,
}) => {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isResendOTPSent, setIsResendOTPSent] = useState(false);
  // const [helperMessage,setHelperMessage] = useState("")

  const otpLogic = () => {
    setIsOTPSent(true);
    onOtpSend && onOtpSend();
    setTimeout(() => {
      setIsResendOTPSent(true);
    }, 6 * 1000);
  };
  useEffect(() => {
    if (executeSendOtp) otpLogic();
    else setIsResendOTPSent(true);
  }, []);
  const sendOtp = useCallback(() => {
    otpLogic();
  }, []);

  const handleOTPValidation = () => {
    return OTP?.length === 6;
  };
  return (
    <Fragment>
      <section className="grid grid-cols-12 col-span-12 gap-1">
        <TextField
          label={label}
          name={name}
          // helperText={isOTPSent ? "We have sent you an OTP" : ""}
          disabled={disabled}
          onChange={onChange}
          value={value}
          className="col-span-12"
          onInput={onInput}
          slotProps={slotProps}
        />

        {!isVerified && (
          <Button
            variant="outlined"
            onClick={() => sendOtp()}
            disabled={!isResendOTPSent}
            size="small"
            sx={{ textTransform: "none" }}
            className="-col-end-1 col-span-2"
          >
            {buttonLabel}
          </Button>
        )}
      </section>
      {!isVerified && isOTPSent && (
        <section className="grid grid-cols-12 col-span-12 gap-1">
          <TextField
            label="OTP"
            slotProps={{
              htmlInput: {
                maxLength: 6,
              },
            }}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            onChange={(e) => setOTP(e.target.value)}
            className="col-span-12 "
          />
          <Button
            variant="outlined"
            onClick={handleSubmit}
            size="small"
            disabled={!handleOTPValidation()}
            sx={{ textTransform: "none" }}
            className="-col-end-1 col-span-2"
          >
            Verify OTP
          </Button>
        </section>
      )}
    </Fragment>
  );
};

export default Verification;
