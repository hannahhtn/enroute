/** @format */

import CarouselSlide from "./CarouselSlide";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

// TODO: Generate event info to send to CarouselSlide?
const EventCarousel = ({ title, resource, filter }) => { 
  return (
    <Stack maxWidth={"100vw"} direction={"column"} gap={"1rem"} p={"1rem"}>
      <Typography variant="h6" px="0.5rem">
        {title}
      </Typography>
      <CarouselSlide resource={resource} filter={filter} />
    </Stack>
  );
};

export default EventCarousel;
