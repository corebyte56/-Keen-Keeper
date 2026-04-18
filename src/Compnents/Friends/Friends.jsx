import React, { useContext, useEffect, useState } from "react";
import Card from "../../UI/Card";
import { friendContext } from "../../Context/Context";

const Friends = () => {
  const { friendsData } = useContext(friendContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-gray-600"></span>
      </div>
    );
  }

  return (
    <div className="my-15 space-y-7">
      <h2 className="text-2xl font-semibold">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {friendsData.map((friend) => (
          <Card key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
