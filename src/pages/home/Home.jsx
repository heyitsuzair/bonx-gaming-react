import React from "react";
import Hero from "./Hero";
import MostWelcome from "./MostWelcome";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <div className="px-20">
        <MostWelcome />
      </div>
    </div>
  );
};

export default Home;
