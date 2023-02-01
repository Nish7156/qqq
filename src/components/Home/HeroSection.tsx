
import React, { useEffect, useState } from "react";
import First from "./First"
import robotLogo from "/public/images/robotLogo.svg"
import CustomImage from "../CustomImage";
import VideoSction from "./VideoSction";


function HeroSection() {
  const [first, setfirst] = useState<any>();
  useEffect(() => {
    const svg:any = document.getElementById("Path_1");
    const length = svg.getTotalLength();

    console.log(length, "length");

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    window.addEventListener("scroll", function () {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const draw = length * scrollpercent *2;
      console.log(length,"length");
      
      console.log(draw,"Draw");

      
      setfirst(draw);

      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length - draw;
    });
  }, []);
  return (
    <>
      <div className="container text-center border-2 " >
        <div className="mx-auto" style={{ width:"800px",position:"relative"}}>
        <CustomImage src={robotLogo} />
        </div>
        <div className="md:mt-16" >
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1575.82 1612.94"><path id="Path_1" className="cls-1" d="m634.85,1.46S218.85,101.46,341.85,183.46h-.25c40,29.25,193.42,82.31,437.75,79.31h-.5c3-.31,173-.31,310-18.31l-.5.06c17.69-2.75,863.03-79.03,282.87,193.29l.63-.35c-182.62,105.41-743.99,88.03-819.37,264.18l-.63,1.48c-.67,54.33-101.2,92.93-321.2,47.93l.1.07s-156.8-35.33-136.9,62.33c19.9,97.66,1331.03-87.39,1381.67-6h-.34s144.77,460.93,12.67,652l-230,54s-1079.33,174.67-1202-62.67.67-567.33.67-567.33c0,0,.67-7.33,9.33-8s68,8,68,8c0,0,1066.34,120.01,1008,266s-433.03,251.95-432,224l-.5-.5s-33.9-358.85,2.5-339.5,51.49,515.27-364,578"/></svg>
        {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1258.22 702.23">
  <path id="Path_1" data-name="Path 5292" className="cls-1" d="m317.24,1.46S-98.76,101.46,24.24,183.46h-.25c40,29.25,193.42,82.31,437.75,79.31l309-18.25c17.69-2.75,863.03-79.03,282.87,193.29l.63-.35c-182.62,105.41-743.99,88.03-819.37,264.18"/>
</svg> */}
        {/* <First /> */}
        {/* <div className="absolute top-[85%]">
        <VideoSction/>
          
        </div> */}
        </div>
        
      </div>
    </>
  );
}

export default HeroSection;
