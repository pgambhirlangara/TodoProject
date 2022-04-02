import {
  createTheme,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { cyan, grey } from "@mui/material/colors";
import { ThemeProvider } from "@mui/styles";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { isLogin } from "./auth";
import Header from "./components/header";
import AppRoutes from "./routes";
import { styled } from "@mui/material/styles";
import { ColorModeContext } from "../context/Color";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, SetDarkMode] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#20202a",
        A600: "#2c2c36",
        A700: "#8c8c8e",
      },
      secondary: {
        main: "#f7bb08",
      },
    },
    typography: {
      allVariants: {
        color: "#fff",
        fontFamily: "Rubik",
      },
      body2: {
        color: "#8c8c8e",
      },
      subtitle2: {
        color: "#fff",
      },
    },
    overrides: {
      MuiButton: {
        outlinedSecondary: {
          // color: '#fff',
          fontFamily: ["Rubik"],
          "&:hover": {
            color: "#fff",
            backgroundColor: "#f7bb08",
          },
          borderRadius: "unset",
        },
        containedPrimary: {
          // color: '#fff',
          fontFamily: ["Rubik"],
          "&:hover": {
            color: "#fff",
            backgroundColor: "#f7bb08",
          },
          borderRadius: "unset",
        },
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: grey[200],
        A600: grey[100],
        A700: "#8c8c8e",
      },
      secondary: {
        main: cyan[600],
      },
    },
    typography: {
      allVariants: {
        color: grey[600],
        fontFamily: "Rubik",
      },
      body2: {
        color: "#8c8c8e",
      },
      subtitle2: {
        color: grey[600],
      },
    },
    overrides: {
      MuiButton: {
        outlinedSecondary: {
          // color: '#fff',
          fontFamily: ["Rubik"],
          "&:hover": {
            color: "#fff",
            backgroundColor: cyan[600],
          },
          borderRadius: "unset",
        },
        containedPrimary: {
          // color: '#fff',
          fontFamily: ["Rubik"],
          "&:hover": {
            color: "#fff",
            backgroundColor: cyan[600],
          },
          borderRadius: "unset",
        },
      },
    },
  });


  useEffect(() => {
    isLogin() ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLogin()]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          palette: {
            mode: "dark",
            primary: {
              main: "#20202a",
              A600: "#2c2c36",
              A700: "#8c8c8e",
            },
            secondary: {
              main: "#f7bb08",
            },
          },
          typography: {
            allVariants: {
              color: "#fff",
              fontFamily: "Rubik",
            },
            body2: {
              color: "#8c8c8e",
            },
            subtitle2: {
              color: "#fff",
            },
          },
        },
      }),
    [mode],
  );


  const switchTheme = () => {
    SetDarkMode(!darkMode);
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} />
        <AppRoutes />
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
