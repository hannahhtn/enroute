/** @format */

import React from "react";
// import Carousel from "react-material-ui-carousel";
import image from "./image.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Box } from "@mui/system";

// TODO:  clean up un-used packages
//        add event props 

function CarouselSlide() {
  const items = [
    image,
    "https://images.unsplash.com/photo-1698328424207-e0fc1d0e03f3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698046366666-9b3e4efafa51?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697734762243-52c47cdc172a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      centerMode={true}
      autoPlay={false}
      centerSlidePercentage={"50"}
      emulateTouch={true}
      transitionTime={"500"}
      // renderItem={(item, isSelected) => { // customize selected item
      //   if (isSelected) {
      //     return (
      //       <Item
      //         // {...item.props}
      //         // height={"30vh"}
      //       />
      //     );
      //   }
      //   return item;
      // }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} height={"20vh"}></Item>
      ))}
    </Carousel>
  );
}

function Item({ item, height }) {
  return (
    <img
      src={item}
      style={{
        height,
        objectFit: "cover",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
      }}
      alt="a future event"
    ></img>
  );
}

export default CarouselSlide;
