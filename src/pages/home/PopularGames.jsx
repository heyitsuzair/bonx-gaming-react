import React from "react";
import { CardGame, HeadingSection } from "../../inc/components/commons";
import { useGames } from "../../inc/hooks/games";

const PopularGames = () => {
  const { data } = useGames();

  return (
    <section id="popular-games" className="py-20">
      <HeadingSection
        text="POPULAR GAMES"
        subTitle="When unknown printer took type and scrambled it to make type specimen book centuries"
      />
      <div className="my-20 grid grid-cols-12 gap-8 items-center justify-center">
        {data?.data?.slice(0, 4).map((game) => {
          return (
            <div key={game._id} className="col-span-12 md:col-span-6">
              <CardGame {...game} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularGames;
