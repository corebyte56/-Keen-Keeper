import React, { useContext } from "react";
import { friendContext } from "../../Context/Context";
import CallCard from "../../UI/CallCard";

const TimeLineCard = () => {
  const { callFunction } = useContext(friendContext);
  console.log(callFunction);

  return (
    <div>
      {callFunction.map((call) => (
        <div className="container mx-auto p-4">
          <CallCard key = {call.id} call = {call}/>
        </div>
      ))}
    </div>
  );
};

export default TimeLineCard;
