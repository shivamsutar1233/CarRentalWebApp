import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cars from "./pages/Cars";
import BookCar from "./pages/BookCar";
import { useSelector } from "react-redux";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import CompleteProfile from "./pages/CompleteProfile";
import Drydock from "./pages/Drydock";
import CreateEditCar from "./pages/CreateEditCar";
import Unauthorized from "./pages/Unauthorized";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn);
  const { roles } = useSelector((state) => state?.globalState?.userPreferences);
  const isProfileCompleted = useSelector(
    (state) => state?.globalState?.userPreferences?.isProfileCompleted
  );
  console.log(isProfileCompleted);
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={isLoggedIn ? <Home /> : <Signin />} />
      <Route path="/Drydock" element={isLoggedIn ? <Drydock /> : <Signin />} />
      <Route path="/Cars" element={<Cars />} />
      <Route
        path="/BookCar"
        element={
          isLoggedIn ? (
            isProfileCompleted ? (
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
        path="/CreateEditCar"
        element={
          isLoggedIn && roles?.includes("Admin") ? (
            <CreateEditCar />
          ) : (
            <Unauthorized />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
