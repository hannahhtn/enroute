/** @format */

import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import ListMapToggle from "./ListMapToggle";
import Date from "./Date";
import EventCarousel from "./EventCarousel";

// TODO: move this theme to its own file?
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
    white: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000",
    },
    black: {
      main: "#000000",
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
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <NavBar />
        <SearchBar />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width={1}
          sx={{ px: 2 }}
        >
          <ListMapToggle />
          <Date />
        </Stack>
         {/* TODO: Generate event info to send to CarouselSlide? */}
        <EventCarousel title={"Popular In Your Area"} />
        <EventCarousel title={"Recommended Events"} />
        <EventCarousel title={"Top 10 in the US"} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
