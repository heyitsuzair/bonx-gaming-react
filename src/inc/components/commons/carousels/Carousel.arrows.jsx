import React from "react";
import { Images } from "../../../config";

const CarouselArrows = ({ slider, isBottomCenter }) => {
  return (
    <>
      {isBottomCenter ? (
        <div className="hidden lg:flex items-center justify-center gap-20 absolute left-[43%] -bottom-20">
          <button
            onClick={() => slider.current?.slickPrev()}
            className="text-white"
          >
            <img src={Images.carousel.prev} alt="Loading..." />
          </button>
          <button
            onClick={() => slider.current?.slickNext()}
            className="text-white"
          >
            <img src={Images.carousel.next} alt="Loading..." />
          </button>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CarouselArrows;
