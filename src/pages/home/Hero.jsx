import React from "react";
import { Text9Xl, Text2Xl, PlainButton } from "../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../inc/config";

const Hero = () => {
  // Hero BG Image
  const HERO_PRIMARY_IMG =
    "/img/hero-bg1-82fc7416624f7e54a222475671a5e21d.webp";
  // Hero Image
  const HERO_SECONDARY_IMG = "/img/hero-position-img.webp";

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  return (
    <section
      className="relative z-0 h-[50vh] md:h-[150vh] bg-no-repeat bg-center bg-cover bg-secondary"
      style={{ backgroundImage: `url(${HERO_PRIMARY_IMG})` }}
    >
      <div className="absolute top-[57%] right-10 md:top-[60%]  lg:right-0 lg:top-[17.5%]">
        <img
          src={HERO_SECONDARY_IMG}
          alt="Loading..."
          className="w-64 ml-24 md:w-full md:ml-0"
        />
      </div>
      <div className="content h-[50vh] md:h-[130vh]  flex items-center">
        <div className="flex flex-col gap-3 mx-10 md:mx-20">
          <Text9Xl text="BEST GAME" classes="metal text-shadow mt-32 z-[1]" />
          <Text9Xl text="PLAYING TODAY." classes="metal text-shadow z-[1]" />
          <Text2Xl
            text="Simply text of the printing and typesetting industry."
            classes="font-bold z-[1] my-8"
          />
          <div className="-ml-4 z-[1]">
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
