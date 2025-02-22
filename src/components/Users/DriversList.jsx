import React from "react";
import UsersLayout from "./UsersLayout";

const DriversList = () => {
  const data = [
    {
      profile:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      email: "admin@alphasquare.in",
      firstName: "Alpha",
      lastName: "Square",
      phoneNumber: "7282XXXXXX",
      roles: ["Admin", "User", "Owner"],
    },
    {
      profile:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      email: "admin@alphasquare.in",
      firstName: "Alpha",
      lastName: "Square",
      phoneNumber: "7282XXXXXX",
      roles: ["Admin", "User", "Owner"],
    },
    {
      profile:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      email: "admin@alphasquare.in",
      firstName: "Alpha",
      lastName: "Square",
      phoneNumber: "7282XXXXXX",
      roles: ["Admin", "User", "Owner"],
    },
    {
      profile:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      email: "admin@alphasquare.in",
      firstName: "Alpha",
      lastName: "Square",
      phoneNumber: "7282XXXXXX",
      roles: ["Admin", "User", "Owner"],
    },
  ];
  return <UsersLayout isLoading={false} data={data} />;
};

export default DriversList;
