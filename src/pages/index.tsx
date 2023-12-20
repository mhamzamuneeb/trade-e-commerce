import Image from "next/image";
import { Inter } from "next/font/google";
import FeaturedCollection from "@/components/featured-collection/FeaturedCollection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <FeaturedCollection />
    </>
  );
}
