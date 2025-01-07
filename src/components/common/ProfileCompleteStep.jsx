import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserPreferencesMutation } from "../../redux/api/IdentityApi";
import { setIsProfileComplted } from "../../redux/slice/GlobalStateSlice";
import { CircularProgress, IconButton } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const ProfileCompleteStep = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const {
    firstName,
    lastName,
    phoneNumber,
    kycType,
    kycNumber,
    isKycVerified,
    isPhoneNumberVerified,
    isEmailVerified,
  } = useSelector((state) => state.completeProfile);
  const dispatch = useDispatch();
  const [updateUserPreferences, { isLoading }] =
    useUpdateUserPreferencesMutation();

  const completeProfileBody = {
    firstName,
    lastName,
    phoneNumber,
    kycNumber,
    kycType: kycType?.value,
    isKycVerified,
    emailConfirmed: isEmailVerified,
    phoneNumberConfirmed: isPhoneNumberVerified,
  };
  useEffect(() => {
    updateUserPreferences(completeProfileBody).then(() => {
      dispatch(setIsProfileComplted(true));
    });
  }, []);
  return (
    <section className="flex flex-1 items-center justify-center">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <IconButton>
          <TaskAltIcon fontSize="large" />
        </IconButton>
      )}
    </section>
  );
};

export default ProfileCompleteStep;
