import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/common/Navbar";
import { Fragment, useEffect, useMemo, useState } from "react";
import { deepPurple, grey } from "@mui/material/colors";
import { Box, CircularProgress, CssBaseline, Divider } from "@mui/material";
import Footer from "./components/common/Footer";
import { useDispatch } from "react-redux";
import {
  useGetUserPreferencesQuery,
  useRefreshUserTokenMutation,
} from "./redux/api/IdentityApi";
import {
  clearGlobalState,
  setIsLoggedIn,
  setUserPreferences,
} from "./redux/slice/GlobalStateSlice";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: grey[100],
        },
        background: {
          default: grey[800],
          paper: grey[800],
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: grey[900],
        },
        background: {
          default: deepPurple[50],
          paper: deepPurple[50],
        },
      },
    },
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const dispatch = useDispatch();
  const [refreshUserToken, { isLoading }] = useRefreshUserTokenMutation();
  const userPreferences = useGetUserPreferencesQuery();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");
    if (token && token !== "undefined") {
      refreshUserToken({ refreshToken: refreshToken })
        .then((response) => {
          dispatch(setIsLoggedIn(true));
          localStorage.setItem("token", response?.data?.accessToken);
          localStorage.setItem("refresh-token", response?.data?.refreshToken);
        })
        .catch(() => {
          localStorage.clear();
          dispatch(clearGlobalState());
        });
    } else {
      localStorage.clear();
      dispatch(setIsLoggedIn(false));
    }
  }, []);

  useMemo(() => {
    dispatch(setUserPreferences(userPreferences.data));
  }, [userPreferences.data]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
      {isLoading || userPreferences.isLoading ? (
        <Box
          sx={{
            display: "flex",
            flex: "1",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Fragment>
          <section className="relative">
            <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          </section>
          <AppRoutes />
          <Divider />
          <Footer />
        </Fragment>
      )}
    </ThemeProvider>
  );
}

export default App;
