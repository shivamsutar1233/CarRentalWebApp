import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/common/Navbar";
import { Fragment, useEffect, useState } from "react";
import { deepPurple, grey } from "@mui/material/colors";
import { Box, CircularProgress, CssBaseline, Divider } from "@mui/material";
import Footer from "./components/common/Footer";
import { useDispatch } from "react-redux";
import { useRefreshUserTokenMutation } from "./redux/api/IdentityApi";
import { setIsLoggedIn } from "./redux/slice/GlobalStateSlice";
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
  const [refreshUserToken, { isLoading, data }] = useRefreshUserTokenMutation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");
    if (token) {
      refreshUserToken({ refreshToken: refreshToken }).then((response) => {
        dispatch(setIsLoggedIn(true));
        localStorage.setItem("token", response?.data?.accessToken);
        localStorage.setItem("refresh-token", response?.data?.refreshToken);
      });
    } else {
      dispatch(setIsLoggedIn(false));
    }
  }, []);
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
        theme={isDarkMode?'dark':'light'}
      />
      {isLoading ? (
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
