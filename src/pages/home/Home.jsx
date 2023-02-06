import React, { useEffect } from "react";
import Hero from "./Hero";
import MostWelcome from "./MostWelcome";
import PeopleSay from "./PeopleSay";
import PopularGames from "./PopularGames";

const Home = ({ setProgress }) => {
  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

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
