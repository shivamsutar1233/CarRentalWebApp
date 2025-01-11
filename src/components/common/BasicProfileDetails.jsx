import { Divider, Icon } from "@mui/material";
import { useSelector } from "react-redux";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppBadIcon from "@mui/icons-material/GppBad";
const BasicProfileDetails = () => {
  const userPreferences = useSelector(
    (state) => state?.globalState?.userPreferences
  );
  return (
    <section className=" flex flex-1 flex-col gap-4">
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Name</section>
        <section>
          {userPreferences?.firstName + " " + userPreferences?.lastName}
        </section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Email</section>
        <section>{userPreferences?.email}</section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Mobile</section>
        <section>+91-{userPreferences?.phoneNumber}</section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Kyc verified</section>
        <section className="flex">
          {userPreferences?.isKycVerified ? (
            <section className="flex">
              verified
              <Icon className="!flex">
                <VerifiedIcon />
              </Icon>
            </section>
          ) : (
            <section className="flex">
              Not verified{" "}
              <Icon className="!flex">
                <GppBadIcon />
              </Icon>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default BasicProfileDetails;
