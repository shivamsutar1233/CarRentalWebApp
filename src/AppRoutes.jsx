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

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn);

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={isLoggedIn ? <Home /> : <Signin />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/BookCar" element={isLoggedIn ? <BookCar /> : <Signin />} />
      <Route
        path="/Bookings"
        element={isLoggedIn ? <Bookings /> : <Signin />}
      />
    </Routes>
  );
};

export default AppRoutes;
