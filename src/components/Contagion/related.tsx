import Heading from "@/elements/Heading";
import Card from "../Card";
function Related() {
  return (
    <div className="py-8">
      <Heading priority="4" color="black" font="font-semibold">
        Related
      </Heading>
      {/* Related post integration */}
      <div className="mb-2">
        <Card
          type="post"
          color="bg-green"
          name="Maude Hall"
          details="Nutritionist"
          description="Can I eat rice and still lose Weight ?"
          duration="4 mins"
          follow
        />
      </div>
    </div>
  );
}

export default Related;
