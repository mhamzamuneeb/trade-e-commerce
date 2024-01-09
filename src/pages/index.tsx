import { Inter } from "next/font/google";
import FeaturedCollection from "@/components/featured-collection/FeaturedCollection";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import { FloatButton } from "antd";
import Homepage from "@/components/layouts/publicLayout/homepage/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
