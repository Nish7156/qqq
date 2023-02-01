import React, { useState, useRef, useEffect } from "react";
import PlayButton from "/public/images/PlayButton.svg";
import pauseButton from "/public/images/pause.svg";
import Image from "next/image";

function VideoSction() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [stop, setStop] = useState(false);
  const videoRef = useRef<any>();
  const handleVideo = () => {
    setVideoOpen(!videoOpen);
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  useEffect(() => {
    const svg: any = document.getElementById("Path_2");
    const length = svg.getTotalLength();

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    window.addEventListener("scroll", function () {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      let draw = length * scrollpercent;

      console.log(draw, "test");

      //   setfirst(draw);

      if (draw >= 1405) {
        let draw2 = length * scrollpercent - 1405;
        svg.style.strokeDashoffset = length - draw2 * 2;
      } else {
        // hide svg before scrolling starts
        svg.style.strokeDashoffset = length;
      }

      // Reverse the drawing when scroll upwards
    });
  }, []);
  
  return (
    <>
    <div className="container border-2">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1258.22 702.23">
  <path id="Path_2" data-name="Path 5292" className="cls-1" d="m317.24,1.46S-98.76,101.46,24.24,183.46h-.25c40,29.25,193.42,82.31,437.75,79.31l309-18.25c17.69-2.75,863.03-79.03,282.87,193.29l.63-.35c-182.62,105.41-743.99,88.03-819.37,264.18"/>
</svg>
    <div className="border-2 ">
<div className=" relative md:px-[15px] max-w-[1024px]">
      <div className="flex items-center justify-center">
        <video
          className="masked add"
          ref={videoRef}
          loop={true}
          controls
          src={"/video/smallVideo.mp4"}
        />
      </div>
      <div
        className={`flex items-center absolute py-8 ${
          videoOpen ? "top-[53%] left-[61.1%] " : " top-[25%] left-[15%]"
        } `}
      >
        {!videoOpen ? (
          <div className="w-1/2 ">
            <h1 className="text-7xl px-[20%] font-bold combined">
              Be the part of the change
            </h1>
          </div>
        ) : (
          ""
        )}
        {!videoOpen ? (
          <div className="w-1/2 duration-500 opacity-100 hover:opacity-100">
            <div className="cursor-pointer " onClick={handleVideo}>
              <Image src={PlayButton} width={200} alt="PlayButton" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-between">
        <div
          onClick={handleVideo}
          className={` cursor-pointer top-[63%] right-[0%] absolute`}
        >
          <Image src={pauseButton} alt="PasueButton" />
        </div>
      </div>
    </div>

    </div>
    </div>
    </>
    
  );
}

export default VideoSction;
