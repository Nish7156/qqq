import Card from "../Card";
function Chat() {
  return (
    <div className="bg-skyBlue-300 p-4 rounded-md">
      <Card
        type="user"
        color="bg-white"
        name="Maude Hall"
        details="Nutritionist"
        description="Can I eat rice and still lose Weight ?"
        duration="4 mins"
        footer
        value="1.1k"
        unvalue="1.2k"
        comment="1.1k"
        participants="200"
        share="true"
      />
    </div>
  );
}

export default Chat;
