import React from "react";
import {
  CardTitleDescription,
  CarouselVideo,
  Counter,
  HeadingSection,
  Text5Xl,
} from "../../inc/components/commons";
import { Cards } from "../../inc/config";

const MostWelcome = () => {
  return (
    <section id="most-welcome" className="py-20">
      <HeadingSection text="YOU ARE MOST WELCOME IN GAMING WORLD." />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between md:my-16">
        {Cards.mostWelcome.map((card) => {
          return <CardTitleDescription key={card.img} {...card} />;
        })}
      </div>
      <div className="overflow-hidden my-2 md:my-32">
        <CarouselVideo />
      </div>
      <div className="counters grid grid-cols-12 items-center justify-center gap-7">
        <div className="col-span-6 md:col-span-3">
          <Counter text="TWITCH STREAMS" end={8697} color="text-yellow-500" />
        </div>
        <div className="col-span-6 md:col-span-3">
          <Counter text="TOTAL GAMES" end={520} color="text-sky-400" />
        </div>
        <div className="col-span-6 md:col-span-3">
          <Counter text="YOUTUBE STREAMS" end={5367} color="text-orange-600" />
        </div>
        <div className="col-span-6 md:col-span-3">
          <Counter text="PRO TEAM" end={249} color="text-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default MostWelcome;
