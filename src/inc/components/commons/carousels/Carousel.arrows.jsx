import React from "react";

const CarouselArrows = ({ slider, top }) => {
  return (
    <>
      <button
        onClick={() => slider.current?.slickPrev()}
        className={`text-white top-1/2 absolute left-0 mx-8`}
      >
        <img src="/img/navigation-arrow2.webp" alt="Loading..." />
      </button>
      <button
        onClick={() => slider.current?.slickNext()}
        className={`text-white top-1/2 absolute right-0 mx-8`}
      >
        <img src="/img/navigation-arrow1.webp" alt="Loading..." />
      </button>
    </>
  );
};

export default CarouselArrows;
