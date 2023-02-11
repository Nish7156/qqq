import React, { useState, useRef, useEffect } from "react";
import PlayButton from "/public/images/PlayButton.svg";
import pauseButton from "/public/images/pause.svg";
import Image from "next/image";
import Line from "./Line";
import { getStrapiMedia } from "../../../lib/media";

import { ScrollAnimationCommon } from "@/Hooks/ScrollAnimationCommon";


function VideoSction({ video }: any) {
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
    ScrollAnimationCommon("section2", "Path_2");

    const svg: any = document.getElementById("Path_2");
    const videoCont: any = document.getElementById("videoHolder");
    const length1 = svg.getTotalLength();
    // start positioning of svg drawing
    // svg.style.strokeDasharray = length;

    // // hide svg before scrolling starts
    // svg.style.strokeDashoffset = length;

    window.addEventListener("scroll", function () {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      let draw = length * scrollpercent;

      let draw2 = length1 * scrollpercent - 200;
      if (draw2 < 300) {
        videoCont.style.opacity = 0;
      } else if (draw2 > 100 && draw2 < 400) {
        videoCont.style.opacity = 0.3;
      } else {
        videoCont.style.opacity = 1;
      }
    });
  }, []);

  useEffect(() => {
    var isInViewport = function (elem: any) {
      var distance = elem.getBoundingClientRect();
      return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  }, []);
  

  return (
    <>
      <div className="container relative mb-[50px]" id="section2">
        <Line />
        <div className="absolute top-[20%] left-[15%]">
          <div
            className=" relative md:px-[15px] max-w-[1024px] video-holder"
            id="videoHolder"
          >
            <div className="flex items-center justify-center">
              <video
                className="masked add"
                ref={videoRef}
                loop={true}
                controls
                src={getStrapiMedia(video)}
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
                <div className="w-1/2 duration-500 opacity-0 play-btn hover:opacity-100">
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
                className={` cursor-pointer top-[40%] right-[0%] absolute`}
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
