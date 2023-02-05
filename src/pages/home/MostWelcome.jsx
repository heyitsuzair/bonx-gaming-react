import React from "react";
import {
  CardTitleDescription,
  CarouselVideo,
  Text5Xl,
} from "../../inc/components/commons";
import { MostWelcomeCards } from "../../inc/config";

const MostWelcome = () => {
  return (
    <div id="most-welcome" className="py-20">
      <Text5Xl
        text="YOU ARE MOST WELCOME IN GAMING WORLD."
        classes="font-bold max-w-3xl mx-auto text-center !leading-[5rem]"
      />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between my-16">
        {MostWelcomeCards.map((card) => {
          return <CardTitleDescription key={card.img} {...card} />;
        })}
      </div>
      <div className="overflow-hidden my-2 md:my-32">
        <CarouselVideo />
      </div>
    </div>
  );
};

export default MostWelcome;
