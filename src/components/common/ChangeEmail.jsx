import { useSelector } from "react-redux";
import Verification from "./Verification";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLazyGetUserPreferencesQuery } from "../../redux/api/IdentityApi";

const ChangeEmail = () => {
  const { email } = useSelector((state) => state?.globalState?.userPreferences);
  const [OTP, setOTP] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isCurrentEmailVerified, setIsCurrentEmailVerified] = useState(null);

  const [newOTP, setNewOTP] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [isNewOtpSent, setIsNewOtpSent] = useState(false);
  const [isNewEmailVerified, setIsNewEmailVerified] = useState(null);

  const [getUserPreferences] = useLazyGetUserPreferencesQuery();

  const handleSubmit = () => {
    setIsCurrentEmailVerified(true);
  };
  const handleNewSubmit = () => {
    setIsNewEmailVerified(true);
  };

  useEffect(() => {
    if (isCurrentEmailVerified && isNewEmailVerified) {
      toast.success("Email changed successfully");
      getUserPreferences();
    }
  }, [isCurrentEmailVerified, isNewEmailVerified]);
  return (
    <section className="flex flex-col gap-6">
      <Verification
        name={"Email"}
        value={email}
        label={"Current email"}
        executeSendOtp={false}
        onOtpSend={() => setIsOtpSent(true)}
        disabled={true}
        setOTP={setOTP}
        OTP={OTP}
        handleSubmit={handleSubmit}
        buttonLabel={isOtpSent ? "Resend Otp" : "Send Otp"}
        isVerified={isCurrentEmailVerified}
      />
      {isCurrentEmailVerified && (
        <Verification
          name={"newEmail"}
          value={newEmail}
          label={"New email"}
          executeSendOtp={false}
          onOtpSend={() => setIsNewOtpSent(true)}
          setOTP={setNewOTP}
          OTP={newOTP}
          disabled={isNewEmailVerified}
          handleSubmit={handleNewSubmit}
          buttonLabel={isNewOtpSent ? "Resend Otp" : "Send Otp"}
          isVerified={isNewEmailVerified}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      )}
    </section>
  );
};

export default ChangeEmail;
