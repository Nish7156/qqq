import Image from "next/image";
import Link from "next/link";
import React from "react";
import social from "/public/images/social.svg";

const SocialImage = () => {
  const img = <Image src={social} alt="social" />;
  return img?.props?.src?.src;
};

function Line() {
  return (
    <svg
      width="1203px"
      height="456px"
      viewBox="0 0 1203 456"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="relative mx-auto "
    >
      <g
        id="Page-1"
        stroke="none"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Section1_single_path"
          transform="translate(2.000000, 2.000000)"
        >
          <path
            id="Path_1"
            className="cls-1"
            d="M315.87,0.14 C315.87,0.14 -100.13,100.14 22.87,182.14 L22.62,182.14 C62.62,211.39 216.04,264.45 460.37,261.45 L459.87,261.45 C462.87,261.14 632.87,261.14 769.87,243.14 L769.37,243.2 C787.06,240.45 1409.49,155.26 1052.24,436.49 L1052.87,436.14 C1052.87,436.14 870.2,580.14 726.87,632.14"
          ></path>
        </g>
      </g>
      <Link href={"http://www.google.com/"} legacyBehavior>
        <a>
          <image id="social" x="0" y="100" xlinkHref={SocialImage()} />
        </a>
      </Link>
    </svg>
  );
}

export default Line;
