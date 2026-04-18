import React, { useState, createContext } from "react";
import FriendData from "../Data/friendData.json";
import { toast } from "react-toastify";

export const friendContext = createContext();

const Context = ({ children }) => {
  const [friendsData, setFriendsData] = useState(FriendData);
  const [callFunction, setCallFunction] = useState([]); 
  const [textFunction, setTextFunction] = useState([])

  // call
  const handleCall = (findFriends) => {
    const findCalls = friendsData.find((friend) => friend.id === findFriends.id);

    if (findCalls) {
      setCallFunction([...callFunction, findCalls]);
      toast.success(`Called to ${findFriends.name}`)
    }

    console.log(findCalls);
  };


  // Text

  const handleText = (findFriends) => {
    const findTexts = friendsData.find((friend) => friend.id === findFriends.id);

    if (findTexts) {
      setCallFunction([...textFunction, findTexts]);
      toast.success(`Texted to ${findFriends.name}`)
    }

    console.log(findTexts);
  };

  // -----------------------------------------------------------------------------------
  const data = {
    setFriendsData,
    friendsData,
    handleCall,
    callFunction,
    handleText
  };
  return (
    <friendContext.Provider value={data}>{children}</friendContext.Provider>
  );
};

export default Context;
