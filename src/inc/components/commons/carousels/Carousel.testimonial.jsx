import React, { useRef } from "react";
import Slider from "react-slick";
import { Carousels } from "../../../config";
import { TestimonialPlain } from "../index";
import CarouselArrows from "./Carousel.arrows";

const CarouselTestimonial = () => {
  const slider = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="overflow-hidden">
        <Slider ref={slider} {...settings}>
          {Carousels.testimonial.map((testimonial) => {
            return (
              <div key={testimonial.name} className="lg:px-20">
                <TestimonialPlain {...testimonial} />
              </div>
            );
          })}
        </Slider>
      </div>
      <CarouselArrows slider={slider} isBottomCenter />
    </>
  );
};

export default CarouselTestimonial;
