import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cars from "./pages/Cars";
import BookCar from "./pages/BookCar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/BookCar" element={<BookCar />} />
    </Routes>
  );
};

export default AppRoutes;
