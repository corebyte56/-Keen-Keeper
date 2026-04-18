import React, { useContext } from "react";
import { friendContext } from "../../Context/Context";
import CallCard from "../../UI/CallCard";
import TextCard from "../../UI/TextCard";

const TimeLineCard = () => {
  const { callFunction, textFunction } = useContext(friendContext);
  console.log(textFunction);

  return (
    <div>
      {callFunction.map((call) => (
        <div className="container mx-auto p-4">
          <CallCard key = {call.id} call = {call}/>
        </div>
      ))}

      {textFunction.map((text) => (
        <div className="container mx-auto p-4">
          <TextCard key = {text.id} text = {text}/>
        </div>
      ))}
    </div>
  );
};

export default TimeLineCard;
