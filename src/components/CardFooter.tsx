import React from "react";
import Up from "/public/images/up.svg";
import Down from "/public/images/down.svg";
import CustomImage from "./CustomImage";
import Text from "@/elements/Text";
import Tag from "/public/images/tag.svg";
import Share1 from "/public/images/Share.svg";


function CardFooter({ footer, value, unvalue, comment, participants,share }: any) {
  return (
    <>
      <div className="flex justify-between pt-4">
        <div className="flex items-center justify-between w-8/12 basis-8/12">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1">
              <CustomImage src={Up} />
            </div>
            <Text size="xs">Value</Text>
            <div className="flex items-center ml-2">
            <Text size="xs" color="text-gray-500">
              {value}
            </Text>
            <div className="w-1 h-1 ml-1 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1">
              <CustomImage src={Down} />
            </div>
            <Text size="xs">Unvalue</Text>
            <div className="flex items-center ml-2">
            <Text size="xs" color="text-gray-500">
              {unvalue}
            </Text>
            <div className="w-1 h-1 ml-1 rounded-full bg-error"></div>
            </div>
          </div>
          <div className="relative px-2 py-1 rounded-md bg-primary arrow-bottom">
            <Text size="xs" color="text-white">
              {comment}
            </Text>
          </div>
          <div>
            {participants && (
              <Text size="xs" color="text-gray-500">
                {participants} Participants
              </Text>
            )}
          </div>
          {share && (
            <div className="w-5 h-5 ">
            <CustomImage src={Share1} />
          </div>

          )}
        </div>
        <div>
          <div className="w-4 h-5 ">
            <CustomImage src={Tag} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFooter;
