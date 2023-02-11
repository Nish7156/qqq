import Heading from "@/elements/Heading";
import Text from "@/elements/Text";

function About() {
  return (
      <div className="rounded-lg p-8 bg-primary">
          <Heading priority="4" color="text-white" font="font-bold">
            About Contagion
          </Heading>
          <div className="leading-normal	 pt-2">
          <Text size="base" color="text-white">
          Contagious diseases (such as the flu, colds, or strep throat) spread
            from person to person in several ways. One way is through direct
            physical contact, like touching or kissing a person who has the
            infection.
            </Text>
            </div>
            
        </div>
   
  );
}

export default About;
