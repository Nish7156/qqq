import social from "/public/images/social.svg";
import CustomImage from "../CustomImage";
import Heading from "@/elements/Heading";
import Link from "next/link";
function Header() {
  return (
    <div className="container ">
      <div className="flex justify-between items-center py-4">
        <Heading priority="3" >
          Contagion
        </Heading>
       
          <Link href={"http://www.google.com/"} legacyBehavior>
          <a
          className="w-[158px] h-[101px] relative"
        >
              <CustomImage src={social} />
          </a>
          </Link>
      </div>
    </div>
  );
}

export default Header;
