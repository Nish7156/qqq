import React from "react";

function Text({ size, children, color }: any) {
  return (
    <>
      <div
        className={`font-regular 		${
          size == "xxl"
            ? `text-xxl`
            : size == "md"
            ? "text-md "
            : size == "xl"
            ? "text-xl"
            : size == "xs"
            ? "text-xs "
            : size == "sm"
            ? "text-sm "
            : size == "base"
            ? "text-base"
            : size == "lg"
            ? "text-lg"
            : "text-base "
        }
         ${color}

       `}
      >
        {children}
      </div>
    </>
  );
}

export default Text;
