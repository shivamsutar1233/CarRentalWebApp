import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cars from "./pages/Cars";
import BookCar from "./pages/BookCar";
import { useSelector } from "react-redux";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import CompleteProfile from "./pages/CompleteProfile";
import Drydock from "./pages/Drydock";
import Unauthorized from "./pages/Unauthorized";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { userRoles } from "./util/UIConstants";
import BookingsDetails from "./pages/BookingDetails";
import Dashboard from "./pages/Dashboard";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn);
  const roles = useSelector(
    (state) => state?.globalState?.userPreferences?.roles
  );
  const userPreferences = useSelector(
    (state) => state?.globalState?.userPreferences
  );
  const isProfileCompleted = useSelector(
    (state) => state?.globalState?.isProfileCompleted
  );
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" index element={<About />} />
      <Route path="/Contact" index element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={isLoggedIn ? <Home /> : <Signin />} />
      <Route path="/Drydock" element={isLoggedIn ? <Drydock /> : <Signin />} />
      <Route path="/Cars" element={<Cars />} />
      <Route
        path="/BookCar"
        element={
          isLoggedIn ? (
            isProfileCompleted || userPreferences?.isProfileCompleted ? (
              <BookCar />
            ) : (
              <CompleteProfile />
            )
          ) : (
            <Signin />
          )
        }
      />
      <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Signin />} />
      <Route
        path="/CompleteProfile"
        element={isLoggedIn ? <CompleteProfile /> : <Signin />}
      />
      <Route
        path="/Bookings"
        element={isLoggedIn ? <Bookings /> : <Signin />}
      />
      <Route
        path="/BookingDetails"
        element={isLoggedIn ? <BookingsDetails /> : <Signin />}
      />
      {/* <Route
        path="/CreateEditCar"
        element={
          isLoggedIn && roles?.includes(userRoles.admin) ? (
            <CreateEditCar />
          ) : (
            <Unauthorized />
          )
        }
      /> */}
      <Route
        path="/Dashboard"
        element={
          isLoggedIn &&
          (roles?.includes(userRoles.admin) ||
            roles?.includes(userRoles.owner)) ? (
            <Dashboard />
          ) : (
            <Unauthorized />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
