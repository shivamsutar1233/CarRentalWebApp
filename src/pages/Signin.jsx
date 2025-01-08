import { Link, TextField } from "@mui/material";
import { useState } from "react";
import { useLoginUserMutation } from "../redux/api/IdentityApi";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/slice/GlobalStateSlice";
import { LoadingButton } from "@mui/lab";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signin = () => {
  const [loginUser, { isLoading, data }] = useLoginUserMutation();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await loginUser(formState)
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        localStorage.setItem("token", res?.data?.accessToken);
        localStorage.setItem("refresh-token", res?.data?.refreshToken);
        if (location.pathname === "/Signin") navigate("/");
      })
      .then(() => {
        toast.success("Logged in successfully");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
        dispatch(setIsLoggedIn(false));
      });
  };

  return (
    <section className="flex flex-grow flex-col justify-center items-center py-48 gap-4 min-h-screen">
      <section className=" text-base font-semibold p-4">Welcome back</section>
      <section className=" min-w-96">
        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit}
          action="javascript:void (0)"
        >
          <TextField
            error={false}
            id="signin-email"
            label="email"
            variant="outlined"
            type="email"
            helperText=""
            required
            disabled={isLoading}
            aria-label="signin email"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            error={false}
            id="signin-password"
            label="password"
            variant="outlined"
            type="password"
            helperText=""
            required
            disabled={isLoading}
            aria-label="Signin-password"
            value={formState.password}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <LoadingButton
            variant={"contained"}
            size={"large"}
            loading={isLoading}
            sx={{ textTransform: "none" }}
            type="submit"
          >
            Signin
          </LoadingButton>
        </form>
      </section>
      <section className="flex gap-2 min-w-96">
        Don't have an account?{" "}
        <Link href={"/Signup"} underline="hover">
          Signup
        </Link>
      </section>
    </section>
  );
};

export default Signin;
