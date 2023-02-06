import React, { useRef } from "react";
import Slider from "react-slick";
import { Images } from "../../../config";
import { TextShapped } from "../index";
import CarouselArrows from "./Carousel.arrows";

const CarouselVideo = () => {
  const slider = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <Slider ref={slider} {...settings}>
        <div>
          <div
            className="banner relative flex flex-col items-center justify-center w-full h-[20rem] lg:h-[35rem] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/img/gaming-bg1.webp)" }}
          >
            <a href="//youtube.com" target="_blank">
              <img src={Images.playBtn} className="w-12 h-12 md:w-20 md:h-20" />
              <span className="absolute top-[46.7%] left-1/2">
                <span className="animate-ping -mt-6 -ml-10 inline-flex h-20 w-20 rounded-full bg-white opacity-50"></span>
              </span>
            </a>
            <div className="absolute bottom-2 hidden xl:block">
              <TextShapped
                text="WATCH LIVE STREAMING"
                classes="text-center font-bold"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="banner relative flex flex-col items-center justify-center w-full h-[20rem] lg:h-[35rem] bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/img/gaming-bg1.webp)" }}
          >
            <a href="//youtube.com" target="_blank">
              <img src={Images.playBtn} className="w-12 h-12 md:w-20 md:h-20" />
              <span className="absolute top-[46.7%] left-1/2">
                <span className="animate-ping -mt-6 -ml-10 inline-flex h-20 w-20 rounded-full bg-white opacity-50"></span>
              </span>
            </a>
            <div className="absolute bottom-2 hidden xl:block">
              <TextShapped
                text="WATCH LIVE STREAMING"
                classes="text-center font-bold"
              />
            </div>
          </div>
        </div>
      </Slider>
      <CarouselArrows slider={slider} />
    </div>
  );
};

export default CarouselVideo;
