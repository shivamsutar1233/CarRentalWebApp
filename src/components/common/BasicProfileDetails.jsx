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
          {userPreferences.firstName && userPreferences?.firstName}{" "}
          {userPreferences.lastName && userPreferences?.lastName}
        </section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Email</section>
        <section className="flex gap-1">
          {userPreferences?.email}
          {userPreferences?.emailConfirmed ? (
            <Icon className="!flex">
              <VerifiedIcon fontSize="small" />
            </Icon>
          ) : (
            <Icon className="!flex">
              <GppBadIcon fontSize="small" />
            </Icon>
          )}
        </section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Mobile</section>
        <section className="flex gap-1">
          +91-{userPreferences?.phoneNumber}
          {userPreferences?.emailConfirmed ? (
            <Icon className="!flex">
              <VerifiedIcon fontSize="small" />
            </Icon>
          ) : (
            <Icon className="!flex">
              <GppBadIcon fontSize="small" />
            </Icon>
          )}
        </section>
      </section>
      <Divider />
      <section className=" flex flex-1 justify-start items-center gap-44 py-2">
        <section className="flex w-24">Kyc verified</section>
        <section className="flex">
          {userPreferences?.isKycVerified ? (
            <section className="flex gap-1">
              verified
              <Icon className="!flex">
                <VerifiedIcon fontSize="small" />
              </Icon>
            </section>
          ) : (
            <section className="flex gap-1">
              Not verified
              <Icon className="!flex">
                <GppBadIcon fontSize="small" />
              </Icon>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default BasicProfileDetails;
