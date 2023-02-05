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
      className="relative h-[150vh] bg-no-repeat bg-center bg-cover bg-secondary"
      style={{ backgroundImage: `url(${HERO_PRIMARY_IMG})` }}
    >
      <div className="absolute right-0 top-[17.5%]">
        <img src={HERO_SECONDARY_IMG} alt="Loading..." />
      </div>
      <div className="content h-[130vh]  flex items-center">
        <div className="flex flex-col gap-3 mx-20">
          <Text9Xl text="BEST GAME" classes="metal text-shadow mt-32" />
          <Text9Xl text="PLAYING TODAY." classes="metal text-shadow z-[1]" />
          <Text2Xl
            text="Simply text of the printing and typesetting industry."
            classes="font-bold z-[1] my-8"
          />
          <PlainButton
            onClick={() => navigate(RoutesPath.contact)}
            text="Play Now"
            icon="fa fa-arrow-right"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
