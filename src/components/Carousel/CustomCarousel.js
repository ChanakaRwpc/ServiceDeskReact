import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const items = [
  {
    name: "Item 1",
    description: "Description 1",
    image: require("../../assets/images/4907157.jpg"),
  },
  {
    name: "Item 2",
    description: "Description 2",
    image: require("../../assets/images/3425225.jpg"),
  },
  {
    name: "Item 3",
    description: "Description 3",
    image: require("../../assets/images/5158039.jpg"),
  },
];

const CustomCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderItems = () => {
    return items.map((item, index) => (
      <Paper key={index}>
        <div
          style={{
            width: "100%",
            height: isMobile ? "150px" : "400px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              objectFit: "contain ",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </Paper>
    ));
  };

  return (
    <Carousel animation="slide" autoPlay={true} indicators={true} timeout={500}>
      {renderItems()}
    </Carousel>
  );
};

export default CustomCarousel;
