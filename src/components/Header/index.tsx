import React, { useState, useEffect } from "react";
import CustomImage from "../CustomImage";
import Logo from "/public/images/logo.svg";
import Menu from "./menu";
import Link from "next/link";

function Header({menus}:any) {
  return (
    <div className="bg-gray sticky top-0 z-10 ">
      <div className="container ">
        <div className=" h-[170px] pt-[20px] flex items-center justify-between">
          <div></div>
          <Link href="/">
            <div className="h-[87px] w-[280px] relative ">
              <CustomImage src={Logo} alt="kofuku" />
            </div>
          </Link>
          <div>
            <Menu  menus={menus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
