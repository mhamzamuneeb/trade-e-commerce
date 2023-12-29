import FeaturedCollection from "@/components/featured-collection/FeaturedCollection";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import React, { useState } from "react";
import BottomComponent from "../bottom";

const Homepage = () => {
  const [sharedData, setSharedData] = useState("");

  const updateData = (newData) => {
    setSharedData(newData);
  };
  return (
    <div>
      <SideMenu sharedData={sharedData} updateData={updateData} />
      <FeaturedCollection sharedData={sharedData} />
      <BottomComponent />
    </div>
  );
};

export default Homepage;
