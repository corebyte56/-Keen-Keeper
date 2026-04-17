import React, { Children } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import FriendData from '../../public/friendData.json'
export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState(FriendData);

 
  const data = {
    setFriendsData,
    friendsData
  };

  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
