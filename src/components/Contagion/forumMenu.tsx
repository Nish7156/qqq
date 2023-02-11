import Link from "next/link";
import Text from "@/elements/Text";
import urerIcon from "/public/images/userIcon.svg";
import quizIcon from "/public/images/quiz.svg";
import pollIcon from "/public/images/poll.svg";
import campfireIcon from "/public/images/campfire.svg";
import CustomImage from "../CustomImage";
function ForumMenu() {
  return (
    <div className="container mt-5">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="w-5 h-5 relative mr-2">
                    <CustomImage src={urerIcon} ></CustomImage>
                </div>
                <Text size="lg" color="text-black-300">Ask a question</Text>
            </div>
            <div className="flex items-center">
                <div className="w-5 h-5 relative mr-2">
                    <CustomImage src={quizIcon} ></CustomImage>
                </div>
                <Text size="lg" color="text-black-300">Create a quiz</Text>
            </div>
            <div className="flex items-center">
                <div className="w-5 h-5 relative mr-2">
                    <CustomImage src={pollIcon} ></CustomImage>
                </div>
                <Text size="lg" color="text-black-300">Start a poll</Text>
            </div>
            <div className="flex items-center">
                <div className="w-5 h-5 relative mr-2">
                    <CustomImage src={campfireIcon} ></CustomImage>
                </div>
                <Text size="lg" color="text-black-300">Campfire</Text>
            </div>

        </div>
      
    </div>
  );
}

export default ForumMenu;
