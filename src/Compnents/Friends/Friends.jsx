import React, { useContext } from "react";
import Card from "../../UI/Card";
import { friendContext } from "../../Context/Context";

const Friends = () => {
  const { setFriendsData, friendsData } = useContext(friendContext);

  return (
    <div className="my-15 space-y-7">
      <h2 className="text-2xl font-semibold">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {
        friendsData.map((friend) => (
        <Card key={friend.id} friend = {friend}/>
        ))
        
        }</div>
    </div>
  );
};

export default Friends;
