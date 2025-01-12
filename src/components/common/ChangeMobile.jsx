import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLazyGetUserPreferencesQuery } from "../../redux/api/IdentityApi";
import { toast } from "react-toastify";
import Verification from "./Verification";

const ChangeMobile = () => {
  const { phoneNumber } = useSelector(
    (state) => state?.globalState?.userPreferences
  );
  const [OTP, setOTP] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isCurrentPhoneNumberVerified, setIsCurrentPhoneNumberVerified] =
    useState(null);

  const [newOTP, setNewOTP] = useState(null);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [isNewOtpSent, setIsNewOtpSent] = useState(false);
  const [isNewPhoneNumberVerified, setIsNewPhoneNumberVerified] =
    useState(null);

  const [getUserPreferences] = useLazyGetUserPreferencesQuery();

  const handleSubmit = () => {
    setIsCurrentPhoneNumberVerified(true);
  };
  const handleNewSubmit = () => {
    setIsNewPhoneNumberVerified(true);
  };

  useEffect(() => {
    if (isCurrentPhoneNumberVerified && isNewPhoneNumberVerified) {
      toast.success("Mobile changed successfully");
      getUserPreferences();
    }
  }, [isCurrentPhoneNumberVerified, isNewPhoneNumberVerified]);
  return (
    <section className="flex flex-col gap-6">
      <Verification
        name={"Mobile number"}
        value={phoneNumber}
        label={"Current mobile number"}
        executeSendOtp={false}
        onOtpSend={() => setIsOtpSent(true)}
        disabled={true}
        setOTP={setOTP}
        OTP={OTP}
        handleSubmit={handleSubmit}
        buttonLabel={isOtpSent ? "Resend Otp" : "Send Otp"}
        isVerified={isCurrentPhoneNumberVerified}
      />
      {isCurrentPhoneNumberVerified && (
        <Verification
          name={"newPhoneNumber"}
          value={newPhoneNumber}
          label={"New mobile"}
          executeSendOtp={false}
          onOtpSend={() => setIsNewOtpSent(true)}
          setOTP={setNewOTP}
          OTP={newOTP}
          disabled={isNewPhoneNumberVerified}
          handleSubmit={handleNewSubmit}
          buttonLabel={isNewOtpSent ? "Resend Otp" : "Send Otp"}
          isVerified={isNewPhoneNumberVerified}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
        />
      )}
    </section>
  );
};

export default ChangeMobile;
