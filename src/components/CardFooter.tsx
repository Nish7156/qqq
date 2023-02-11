import React from "react";
import Up from "/public/images/up.svg";
import Down from "/public/images/down.svg";
import CustomImage from "./CustomImage";
import Text from "@/elements/Text";
import Tag from "/public/images/tag.svg";
import Share from "/public/images/Share.svg";


function CardFooter({ footer, value, unvalue, comment, participants,share }: any) {
  return (
    <>
      <div className="flex pt-4 justify-between">
        <div className="flex  basis-8/12	w-8/12	 justify-between	items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1">
              <CustomImage src={Up} />
            </div>
            <Text size="xs">Value</Text>
            <div className="flex ml-2 items-center">
            <Text size="xs" color="text-gray-500">
              {value}
            </Text>
            <div className="bg-primary w-1 h-1 rounded-full ml-1"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1">
              <CustomImage src={Down} />
            </div>
            <Text size="xs">Unvalue</Text>
            <div className="flex ml-2 items-center">
            <Text size="xs" color="text-gray-500">
              {unvalue}
            </Text>
            <div className="bg-error w-1 h-1 rounded-full ml-1"></div>
            </div>
          </div>
          <div className="bg-primary rounded-md py-1 px-2 relative arrow-bottom">
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
            <CustomImage src={Share} />
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
