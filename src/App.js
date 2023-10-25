/** @format */

import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

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
  spacing: 8,
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "black",
          borderRadius: 15,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column" alignItems="center" justifyContent="center">
        <NavBar />
        <SearchBar />
        <Stack direction="row" alignItems="center" justifyContent="space-around">

        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
