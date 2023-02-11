import Image from "next/image";
import React from "react";
import arrow from "/public/images/arrow.svg";
function Line() {

    const SocialImage=()=>{
        const img = <Image src={arrow} alt="social"/>
        return img?.props?.src?.src
      }
  return (
    <svg id="Isolation_Mode" data-name="Isolation Mode"  viewBox="0 0 2000 1080">
    <path id="Path_5" data-name="Path 6191" className="cls-1" d="m1.23.23s38,207.33,286,210h-.5s351.17,18.67,412.5-73.33S459.48-1.77,382.56,6.23h.67S-248.77,36.89,211.23,222.23s477.33,346.67,477.33,401.33c0,0,16,220.04-241.33,240s-290.67-186.67-244-273.33l-.2.4s116.2-243.07,594.87-228.4"/>
    <image id="arrow"  x="0" y="100" className="circle " xlinkHref={SocialImage()}/>
  </svg>
  )
}

export default Line