import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cars from "./pages/Cars";
import BookCar from "./pages/BookCar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRefreshUserTokenMutation } from "./redux/api/IdentityApi";
import { setIsLoggedIn } from "./redux/slice/GlobalStateSlice";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state?.globalState?.isLoggedIn);
  const dispatch = useDispatch();
  const [refreshUserToken, { isLoading, data }] = useRefreshUserTokenMutation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");
    if (token) {
      refreshUserToken({ refreshToken: refreshToken }).then(() => {
        dispatch(setIsLoggedIn(true));
      });
    } else {
      dispatch(setIsLoggedIn(false));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={isLoggedIn ? <Home /> : <Signin />} />
      <Route path="/Cars" element={<Cars />} />
      <Route path="/BookCar" element={isLoggedIn ? <BookCar /> : <Signin />} />
    </Routes>
  );
};

export default AppRoutes;
