import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
function Personalised() {

  return (
    <div className="container relative ">
      <div className="pt-[200px] pb-[400px] pr-10 flex flex-col ml-auto w-3/6 ">
        <div className="leading-tight">
          <Heading priority="2">Personalised Search</Heading>
        </div>
        <div className="leading-loose	">
          <Text size="md">
            <p>
            Even pizzas come with preferred choices of toppings. 
So why would search results be the same? Oddball results are common when you search health. That, in short, is the reason for AI & ML-powered Personalized Search. We aim to bring you a
healthcare search engine cum friend that always lends an ear, understands you, and gives relevant suggestions. Advanced Filtering is your timesaver. You stop wild goose chase and get to the point. Kofuku can address all your health and wellness queries just the way you want – from baby food to renal transplant.
            </p>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Personalised;
