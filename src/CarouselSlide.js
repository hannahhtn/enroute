/** @format */

import React, { useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
// import image from "./image.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { searchEvent } from "./searchEvents";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// TODO:  clean up un-used packages
//        add event props

function CarouselSlide({ resource, filter }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([""]);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchEven = async () => {
      const res = await searchEvent(resource, filter);
      setItems(res[resource]);
      setLoading(true);
      // console.log(res[resource]);
    };

    fetchEven();
  }, [resource, filter]);
  if (!loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => 0 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Carousel
      preventMovementUntilSwipeScrollTolerance={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      autoPlay={false}
      emulateTouch={true}
      transitionTime={"800"}
      infiniteLoop={false}
      swipeScrollTolerance={8}
      width={"100%"}
    >
      {items.map((item, i) => (
        <Item key={i} item={item}></Item>
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  let image = item.images.find((i) => i.width > deviceWidth);
  const [url, setUrl] = useState(image.url);
  window.addEventListener("resize", () => {
    setDeviceWidth(window.innerWidth);
  });
  useEffect(() => {
    // eslint-disable-next-line
    image = item.images.find((i) => i.width > deviceWidth);
    setUrl(image.url);
  }, [deviceWidth]);

  return (
    <Stack display="flex" direction="column" gap="0.5rem">
      <img
        src={url} // TODO: update appropriate image size for current device
        style={{
          borderRadius: "1rem",
          height: "30vh",
          objectFit: "cover",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}
        alt="a future event"
      ></img>
      <Box px="0.5rem">
        {/* <a href={item.url}>ffff</a> */}
        <Typography variant="subtitle1" align="left">
          {item.name}
        </Typography>
        <Typography variant="subtitle2" align="left">
          {`${
            item._embedded.venues[0].city === undefined
              ? ""
              : item._embedded.venues[0].city.name
          } ${item._embedded.venues[0].state.stateCode}`}
          {/* some api responses dont have city name*/}
        </Typography>
      </Box>
    </Stack>
  );
}

export default CarouselSlide;
