import React from "react";
import Hero from "./Hero";
import MostWelcome from "./MostWelcome";
import PeopleSay from "./PeopleSay";
import PopularGames from "./PopularGames";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <div className="px-5 md:px-20">
        <MostWelcome />
        <PopularGames />
      </div>
      <PeopleSay />
    </div>
  );
};

export default Home;
