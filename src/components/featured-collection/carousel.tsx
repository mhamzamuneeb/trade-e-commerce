import React from "react";
import { Carousel } from "antd";
import { CarouselImage, FacebookIcon } from "@/assets/icons/icons";

export default function MyCarousel() {
  const contentStyle = {
    marginRight: "100px",
    marginLeft: "400px",

    height: "250px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide: any) => {
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
