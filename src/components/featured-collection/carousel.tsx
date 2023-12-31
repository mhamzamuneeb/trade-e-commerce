import React from "react";
import { Carousel } from "antd";

export default function MyCarousel() {
  type TextAlign =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "initial"
    | "inherit";

  const contentStyle = {
    marginRight: "100px",
    marginLeft: "400px",
    height: "250px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center" as TextAlign, // Use Typography.TextAlign type
    background: "#364d79",
  };
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const settings = {
    dots: true,
  };
  return (
    <>
      <Carousel
        afterChange={onChange}
        {...settings}
        dots={{ className: "custom-dots" }}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
          {/* <CarouselImage /> */}
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}
