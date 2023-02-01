import React from "react";

const Heading = ({ priority, children }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <DynamicTag
      className={` font-black ${
        priority == 1
          ? "text-xxl"
          : priority == 2
          ? "text-xxl "
          : priority == 3
          ? "lg:xl "
          : priority == 4
          ? "lg:text-xxl text-xl "
          : priority == 5
          ? "lg:text-xl text-lg "
          : priority == 6
          ? "text-sm"
          : "text-lg  "
      }
       
       `}
    >
      {children}
    </DynamicTag>
  );
};

export default Heading;
