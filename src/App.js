/** @format */

import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import ListMapToggle from "./ListMapToggle";
import Calendar from "./Calendar";
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
    grey: {
      main: "#696969",
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
  let currentDay = new Date();
  currentDay.setMilliseconds(0);

  // replace .000Z with Z so the todayString format will be accepted when using TM API
  const todayString = currentDay.toISOString().replace(".000Z", "Z");

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
          <Calendar />
        </Stack>
        {/* TODO: Generate event info to send to CarouselSlide? */}
        <EventCarousel
          title={"Popular music events in the US"}
          resource={"events"}
          filter={{
            classificationName: "music",
            size: "10",
            countryCode: "us",
            sort: "date,asc",
            startDateTime: todayString,
          }}
        />
        <EventCarousel
          title={"Upcoming art events in Seattle"}
          resource={"events"}
          filter={{
            keyword: "art",
            size: "10",
            countryCode: "us",
            city: "seattle",
            sort: "date,asc",
            startDateTime: todayString,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
