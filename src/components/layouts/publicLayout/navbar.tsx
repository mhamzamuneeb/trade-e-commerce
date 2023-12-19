import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className=" bg-black text-white h-10 flex items-center justify-center text-sm">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <Link href={"#"} className=" font-semibold underline ml-4">
        Show Now
      </Link>
    </div>
  );
}
