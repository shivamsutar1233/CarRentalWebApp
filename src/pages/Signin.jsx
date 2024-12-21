import { TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { StyledLoadingButton } from "../components/common/LoadingButton";
import { useLoginUserMutation } from "../redux/api/IdentityApi";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/slice/GlobalStateSlice";

const Signin = () => {
  const [loginUser, { isLoading, data, error }] = useLoginUserMutation();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await loginUser(formState)
      .then(() => {
        dispatch(setIsLoggedIn(true));
      })
      .catch(() => dispatch(setIsLoggedIn(false)));
  };
  useMemo(() => {
    if (data) {
      localStorage.setItem("token", data?.accessToken);
      localStorage.setItem("refresh-token", data?.refreshToken);
    }
  }, [data]);
  return (
    <section className="flex flex-grow flex-col justify-center items-center py-48 gap-4">
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
            aria-label="Signin-password"
            value={formState.password}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <StyledLoadingButton
            variant={"contained"}
            size={"large"}
            loading={isLoading}
            type="submit"
          >
            Signin
          </StyledLoadingButton>
        </form>
      </section>
      <section className="flex gap-2 min-w-96">
        Don't have an account? <NavLink to={"/Signup"}>Signup</NavLink>
      </section>
    </section>
  );
};

export default Signin;
