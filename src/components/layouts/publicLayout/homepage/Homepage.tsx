import FeaturedCollection from "@/components/featured-collection/FeaturedCollection";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import React, { useState } from "react";
import BottomComponent from "../bottom";
import ProductList from "@/components/productList/productList";
import { HeroImage } from "../HeroImage";
import MyCarousel from "@/components/featured-collection/carousel";

interface newData {
  sharedData: string; // Assuming sharedData is of type string, you can adjust it based on your actual data type
}
const Homepage = () => {
  const [sharedData, setSharedData] = useState<newData>("");

  const updateData = (newData) => {
    console.log(newData);
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
