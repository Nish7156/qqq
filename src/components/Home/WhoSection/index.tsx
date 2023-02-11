//@ts-ignore
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import { useEffect, useState } from "react";
import MultiPeoplesSvg from "./MultiPeoplesSvg";
import SleepPersionSvg from "./SleepPersionSvg";
import Line from "./Line";
//@ts-ignore
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import { ScrollAnimationCommon } from "@/Hooks/ScrollAnimationCommon";
import useScrollPosition from "@/Hooks/useScrollPosition";

function Who({ title, description }: any) {
  const scrollPosition = useScrollPosition();
  let groupPeoples = false;
  let sleepPersion = false;

  console.log(scrollPosition, "scrollPosition");

  if (scrollPosition > 1500) {
    groupPeoples = true;
  } else {
    groupPeoples = false;
  }
  if (scrollPosition > 1710) {
    sleepPersion = true;
  } else {
    sleepPersion = false;
  }

 useEffect(() => {
  ScrollAnimationCommon("section3","Path_3")
 
   return () => {
    ScrollAnimationCommon
    console.log("Clear");
    
   }
 }, [])
 

  return (
    <div className="container relative  mb-[200px]" id="section3">
      <div className="absolute top-0 bottom-0 left-0 right-0 ">
        <Line />
        {groupPeoples && (
          <>
            <div className="absolute right-[170px] top-[40%] ">
              <MultiPeoplesSvg />
            </div>
          </>
        )}
        {sleepPersion && (
          <div className="absolute left-8  -bottom-[280px] ">
            <SleepPersionSvg />
          </div>
        )}
      </div>

      <div className="pt-12 pb-50">
        {/* <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay="100"
          duration="0.5"
        >
          <div className="pb-8 text-center ">
            <Heading priority="2">Who’s Who</Heading>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay="500"
          duration="5"
        >
          <div className="pl-36">
            <Text size="md">
              <p>To be honest, we don’t do much. </p>
              <p>
                We are just getting the band together and then, you rock the
                stage.{" "}
              </p>
              <p>We leave your health in your hands! </p>
              <p>
                Swing by and boogie your day away with interesting health facts.
              </p>
              <p>
                Rock and roll from the blues on a trip across the path of
                wellness.{" "}
              </p>
            </Text>
          </div>
        </ScrollAnimation> */}
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay="100"
          duration="0.5"
        >
          <div className="pb-8 text-center ">
            <Heading priority="2">{title}</Heading>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay="500"
          duration="5"
        >
          <div className=" max-w-[800px] pl-36 leading-loose">
            <Text size="md">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Text>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Who;
