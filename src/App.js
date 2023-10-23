/** @format */

import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    warning: {
      main: "#ed6c02",
    },
  },
  typography: {
    fontFamily: "Lora",
  },
  spacing: 8
  ,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
