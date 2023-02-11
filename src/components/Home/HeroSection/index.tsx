import React, { useEffect, useState } from "react";
import Line from "./Line";
import circleArrow from "/public/images/circle.svg";
import social from "/public/images/social.svg";
import CustomImage from "../../CustomImage";
import Robot from "./Robot";
import Health from "./Health";
import Link from "next/link";
import Image from "next/image";

// import ReactWOW from 'react-wow'
//@ts-ignore
import ScrollAnimation from "react-animate-on-scroll";
import { ScrollAnimationCommon } from "@/Hooks/ScrollAnimationCommon";
import { useMovingObj } from "@/Hooks/useMovingObj";

function isInViewport(element: any) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function HeroAnimation() {
  const reboot: any = document.getElementById("rebootHolder");
  const smallCircle: any = document.getElementById("smallCircle");

  const box: any = document.querySelector(".secondSection");

  var scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  reboot.style.opacity = scroll / 100;
  smallCircle.style.transform = "rotate(" + (-220 + scroll) + "deg)";
}

function HeroSection() {
  useEffect(() => {
    //Moving Obj
    useMovingObj("Path_1", "#social");

    // Line Animation  Parameter-> [ para1-> Target Section to start animation(id)]
    // [ para2-> SVG Image Path (id) ]
    // [ para3-> Optional? -> To increase speed of the svg ]
    ScrollAnimationCommon("section1", "Path_1");

    //Scroll Function
    window.addEventListener("scroll", HeroAnimation);

    //Clear the Function
    return () => {
      window.removeEventListener("scroll", HeroAnimation);
    };
  }, []);

  return (
    <>
      <div className="container text-center" id="section1">
        <div className="mx-auto">
          <div className="relative mt-[150px] " id="rebootHolder">
            <div className="w-full h-[211px] ">
              <h1 className="sr-only ">Roboot Health</h1>
              <div className="flex justify-center text-center">
                <div className="relative">
                  <Robot />
                  <div
                    className="absolute top-16  -right-4 w-[372px] h-[107px] "
                    id="smallCircle"
                  >
                    {" "}
                    <Image
                      src={circleArrow}
                      layout="fill"
                      alt={"circleArrow"}
                    />
                  </div>
                </div>
                <Health />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container relative w-full -mt-12 left-28">
        <div
          className="w-[136px] h-[87px] fixed z-20 socialHolder"
          id="socialKofuku"
        >
          <Link href={"http://www.google.com/"} legacyBehavior>
            <a>
              <CustomImage src={social} />
            </a>
          </Link>
        </div>
        <Line />
      </div>
      {/* Need to remove after implementing */}
      <div className="secondSection">{/* Second Section */}</div>
    </>
  );
}

export default HeroSection;
