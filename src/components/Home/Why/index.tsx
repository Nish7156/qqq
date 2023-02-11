//@ts-ignore
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import { useEffect, useState } from "react";
//@ts-ignore
import ScrollAnimation from "react-animate-on-scroll";

function Why({title,description}:any) {
  return (
    <div className="container relative  mb-[200px] pt-32">
      <div className=" pt-12 pb-50 flex items-center">
       
          <div className=" pb-8 text-center leading-none	">
            <Heading priority="2">{title}</Heading>
          </div>
       <div className="ml-12 max-w-[628px]">
          <Text size="md">
          <div dangerouslySetInnerHTML={{__html:description}} />
          
          </Text>
          </div>
      </div>
    </div>
  );
}

export default Why;
