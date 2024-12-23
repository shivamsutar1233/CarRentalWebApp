import { Link, TextField } from "@mui/material";
import { useState } from "react";
import { useRegisterUserMutation } from "../redux/api/IdentityApi";
import { LoadingButton } from "@mui/lab";

const Signup = () => {
  const [registerUser, { isLoading, data, error }] = useRegisterUserMutation();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const handleSubmit = async () => {
    await registerUser(formState);
  };
  console.log(data);
  console.log(error);
  return (
    <section className="flex flex-grow flex-col justify-center items-center py-48 gap-4">
      <section className=" text-base font-semibold p-4">
        Welcome onboard
      </section>
      <section className=" min-w-96">
        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit}
          action="javascript:void (0)"
        >
          <TextField
            error={false}
            id="signup-email"
            label="email"
            variant="outlined"
            type="email"
            helperText=""
            required
            aria-label="signup email"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            error={false}
            id="signup-password"
            label="password"
            variant="outlined"
            type="password"
            helperText=""
            required
            aria-label="Signup-password"
            value={formState.password}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <LoadingButton
            variant={"contained"}
            size={"large"}
            loading={isLoading}
            type="submit"
          >
            Signup
          </LoadingButton>
        </form>
      </section>
      <section className="flex gap-2 min-w-96">
        Already have an account?{" "}
        <Link href={"/Signin"} underline="hover">
          Signin
        </Link>
      </section>
    </section>
  );
};

export default Signup;
