import ReactDom from "react-dom";
import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2e6f1",
      a100: "#ECF4EC",
    },
    secondary: {
      main: "#F15A22",
    },
    accent: {
      main: "#FDC350",
    },
    warning: {
      main: red[500],
    },
  },
});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("react-container")
);
