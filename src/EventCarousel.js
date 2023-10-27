/** @format */

import CarouselSlide from "./CarouselSlide";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

// TODO: Generate event info to send to CarouselSlide?
const EventCarousel = ({ title }) => {
  return (
    <Stack direction={"column"} justifyContent={"start"} gap={"1rem"} p={"1rem"}>
          <Typography component="h1">{title}</Typography>
          <CarouselSlide/>
    </Stack>
  );
};

export default EventCarousel;
