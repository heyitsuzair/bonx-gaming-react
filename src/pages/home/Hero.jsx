import React from "react";
import { Text9Xl, Text2Xl, PlainButton } from "../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { Images, RoutesPath } from "../../inc/config";

const Hero = () => {
  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative z-0 h-screen md:h-[150vh] bg-no-repeat bg-center bg-cover bg-secondary"
      style={{ backgroundImage: `url(${Images.hero.bg})` }}
    >
      <div className="absolute top-[70%] right-10 md:top-[60%] lg:right-0 lg:top-[17.5%]">
        <img
          src={Images.hero.floating}
          alt="Loading..."
          className="w-64 ml-24 md:w-full md:ml-0"
        />
      </div>
      <div className="content h-screen md:h-[130vh]  flex items-center">
        <div className="flex flex-col gap-3 mx-10 md:mx-20">
          <Text9Xl
            text="BEST GAME PLAYING TODAY."
            classes="metal text-shadow mt-32 z-[1] max-w-3xl"
          />
          <Text2Xl
            text="Simply text of the printing and typesetting industry."
            classes="font-bold z-[1] my-8"
          />
          <div className="z-[1]">
            <PlainButton
              onClick={() => navigate(RoutesPath.contact)}
              text="Play Now"
              icon="fa fa-arrow-right"
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
