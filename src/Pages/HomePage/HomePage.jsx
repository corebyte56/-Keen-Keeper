import React from "react";
import Banner from "../../Compnents/Banner/Banner";
import CountCard from "../../Compnents/Count-Card/CountCard";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center ">
      <Banner />
      <CountCard />
      <div className="divider"></div>
      
    </div>
  );
};

export default HomePage;
