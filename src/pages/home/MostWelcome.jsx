import React from "react";
import { CardTitleDescription, Text5Xl } from "../../inc/components/commons";

const MostWelcome = () => {
  return (
    <div id="most-welcome" className="py-20">
      <Text5Xl
        text="YOU ARE MOST WELCOME IN GAMING WORLD."
        classes="font-bold max-w-3xl mx-auto text-center !leading-[5rem]"
      />
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between my-16">
        <CardTitleDescription
          bgPosition={1}
          img="gaming-world1.webp"
          title="Live Streaming"
          description="When unknown printer took type and scrambled it to make type specimen book centuries"
        />
        <CardTitleDescription
          bgPosition={2}
          img="gaming-world2.webp"
          title="Live Streaming"
          description="When unknown printer took type and scrambled it to make type specimen book centuries"
        />
        <CardTitleDescription
          bgPosition={3}
          img="gaming-world3.webp"
          title="Live Streaming"
          description="When unknown printer took type and scrambled it to make type specimen book centuries"
        />
      </div>
    </div>
  );
};

export default MostWelcome;
