import FeaturedCollection from "@/components/featured-collection/FeaturedCollection";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import React, { useState } from "react";
import BottomComponent from "../bottom";
import ProductList from "@/components/productList/productList";
import { HeroImage } from "../HeroImage";
import MyCarousel from "@/components/featured-collection/carousel";

const Homepage = () => {
  const [sharedData, setSharedData] = useState("");

  const updateData = (newData) => {
    setSharedData(newData);
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <SideMenu sharedData={sharedData} updateData={updateData} />
        <HeroImage />
        {/* <MyCarousel /> */}
      </div>
      <FeaturedCollection sharedData={sharedData} />
      <ProductList />
      <BottomComponent />
    </div>
  );
};

export default Homepage;
