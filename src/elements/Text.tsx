import React from "react";

function Text({  size,children }: any) {
  return (
    <>
      <div
        className={`font-regular leading-loose		${
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
       `}
      >
        {children}
      </div>
    </>
  );
}

export default Text;

