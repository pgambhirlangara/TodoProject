import {
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { isLogin } from "./auth";
import Header from "./components/header";
import AppRoutes from "./routes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isLogin() ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLogin()]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ed6c03"
      },
      secondary: {
        main: "#9c27b0",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
