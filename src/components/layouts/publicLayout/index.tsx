import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import NavBar from "./navbar";
import BottomComponent from "./bottom";
interface Props {
  children: ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <Header />
      <main>{children}</main>
      <BottomComponent />
      <Footer />
    </div>
  );
}
