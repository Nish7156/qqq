import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import { ScrollAnimationCommon } from "@/Hooks/ScrollAnimationCommon";
import { useEffect } from "react";
import Line from "./Line";
function Sunrise({ title, description }: any) {
  useEffect(() => {
    ScrollAnimationCommon("section4","Path_4")
   
     return () => {
      ScrollAnimationCommon
      console.log("Clear");
      
     }
   }, [])

  return (
    <div className="container relative " id="section4">
      <div className="absolute top-0 bottom-0 left-0 right-0 ">
        <Line />
      </div>
      {/* <div className="absolute top-[38%] left-32 ">
        <Text size="md"><p>Mental Health</p></Text>
      </div>
      <div className="absolute top-[63%] left-[220px] ">
        <Text size="md"><p>Wellness Corner</p></Text>
      </div>
      <div className="absolute bottom-[10%] left-[220px] ">
        <Text size="md"><p>Fitness</p></Text>
      </div>
      <div className="absolute bottom-[10%] left-[220px] ">
        <Text size="md"><p>Fitness</p></Text>
      </div> */}
      <div className="pt-[200px] pb-[400px]">
        <div className="text-center ">
          <Heading priority="2">{title}</Heading>
        </div>
        <div className="max-w-[628px] m-auto leading-loose	">
          <Text size="md">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Sunrise;
