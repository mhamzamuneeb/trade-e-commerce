import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import NavBar from "./navbar";
interface Props {
  children: ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <Header />
      <main className="page-width">{children}</main>

      <Footer />
    </div>
  );
}
