import React from "react";
import { CardGame, HeadingSection } from "../../inc/components/commons";

const PopularGames = () => {
  return (
    <section id="popular-games" className="py-20">
      <HeadingSection
        text="POPULAR GAMES"
        subTitle="When unknown printer took type and scrambled it to make type specimen book centuries"
      />
      <div className="my-20 grid grid-cols-12 gap-8 items-center justify-center">
        <div className="col-span-12 sm:col-span-6">
          <CardGame />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <CardGame />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <CardGame />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <CardGame />
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
