import React,{useState, useEffect} from "react";
import CustomImage from "../CustomImage";
import Logo from "/public/images/logo.svg";
import Menu from "./menu";

function Header() {
   

  return (
    <div className="bg-gray">
      <div className="container ">
        <div className=" h-[159px] flex items-center justify-between">
            <div></div>
          <div className="h-[87px] w-[380px] relative ">
            <CustomImage src={Logo} />
          </div>
          <div>
            <Menu  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
