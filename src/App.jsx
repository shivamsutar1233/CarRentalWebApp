import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import { CssBaseline, Divider } from "@mui/material";
import Footer from "./components/common/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[900],
    },
  },
  colorSchemes: {
    dark: true,
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section className="relative">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </section>
      <AppRoutes />
      <Divider />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
