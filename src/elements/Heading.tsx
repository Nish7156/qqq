import React from "react";

const Heading = ({ priority, children, color,font }: any) => {
  const DynamicTag: any = `h${priority}`;
  return (
    <DynamicTag
      className={`${font ? `${font}` : 'font-black'} ${
        priority == 1
          ? "text-4xl"
          : priority == 2
          ? "text-4xl "
          : priority == 3
          ? "text-3xl "
          : priority == 4
          ? "text-xl "
          : priority == 5
          ? "text-lg"
          : priority == 6 &&
           "text-base"
      } 
      ${color ? `${color}` : `text-black`}

       
       `}
    >
      {children}
    </DynamicTag>
  );
};

export default Heading;
