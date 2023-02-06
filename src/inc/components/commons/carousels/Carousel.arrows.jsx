import React from "react";
import { Images } from "../../../config";

const CarouselArrows = ({ slider }) => {
  return (
    <>
      <button
        onClick={() => slider.current?.slickPrev()}
        className={`text-white top-1/2 absolute left-0 mx-8`}
      >
        <img src={Images.carousel.prev} alt="Loading..." />
      </button>
      <button
        onClick={() => slider.current?.slickNext()}
        className={`text-white top-1/2 absolute right-0 mx-8`}
      >
        <img src={Images.carousel.next} alt="Loading..." />
      </button>
    </>
  );
};

export default CarouselArrows;
