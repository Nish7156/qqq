import React from "react";
import userImage from "/public/images/userImage.svg";
import CustomImage from "./CustomImage";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "./Button";
import Tag from "./Tag";
import CardFooter from "./CardFooter";
function Card({
  user,
  post,
  follow,
  category,
  name,
  description,
  details,
  duration,
  color,type,footer,value,unvalue, comment,participants,share
}: any) {
  return (
    <div className={`rounded-md p-4 ${color}`}>
      <div className="flex items-start">
      {type == "user" && (

          <div className="w-20 h-20 rounded-full relative mr-2">
            <CustomImage src={userImage}></CustomImage>
          </div>
        )}
      {type == "user" && (
          <div>
            <Heading priority="6">{name}</Heading>
            <Text size="sm">{details}</Text>
          </div>
        )}
        {type == "post" &&<div > <Heading priority="6" font="font-normal" color="black-200">Posted by {name}</Heading></div>}
        {duration && <div className="ml-2 mr-6 text-gray-200 inline">{duration}</div>}
        {follow && <Button size="sm">Follow</Button>}
        {category && (
          <Tag text="Fitness" bg="bg-gray-400" color="text-primary" />
        )}
      </div>
      {description && (
        <div>
          <div className="py-4">
            <Text size={type == "post" ? "sm" : "base"} color="text-black-200">
              {description}
            </Text>
          </div>
          <div className="line"></div>
        </div>
      )}
          {footer &&

      <CardFooter  value={value} unvalue={unvalue}  comment={comment} participants={participants}  share={share} />
          }
    </div>
  );
}

export default Card;
