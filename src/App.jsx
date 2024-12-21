import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/common/Navbar";
import { useMemo, useState } from "react";

const dtheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
const theme = createTheme({
  colorSchemes: {
    dark: false,
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useMemo(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? dtheme : theme}>
      <section className="min-h-screen bg-slate-200 dark:bg-gray-900 text-black dark:text-slate-200">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <AppRoutes />
      </section>
    </ThemeProvider>
  );
}

export default App;
