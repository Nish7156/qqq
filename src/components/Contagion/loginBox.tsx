import social from "/public/images/social.svg";
import CustomImage from "../CustomImage";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "../Button";
import { FaExclamationCircle } from "react-icons/fa";
function LoginBox() {
  return (
    <div className="container py-8">
      <div className="bg-warning py-4 px-4 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-error mr-1">
              <FaExclamationCircle />
            </div>
            <Text size="md" color="text-black-200">
              You will need to login to post something or view the user details.
            </Text>
          </div>
          <div className="flex items-center">
            <Button type="secondary"> Sign In</Button>
            <div className="ml-2">
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
