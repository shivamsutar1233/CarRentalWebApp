import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/common/Navbar";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

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
      <section className="min-h-screen">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <AppRoutes />
      </section>
    </ThemeProvider>
  );
}

export default App;
