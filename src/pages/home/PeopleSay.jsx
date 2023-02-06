import React from "react";
import {
  CarouselTestimonial,
  HeadingSectionFancy,
} from "../../inc/components/commons";

const PeopleSay = () => {
  return (
    <section id="people-say" className="py-20 bg-secondary-90">
      <HeadingSectionFancy text="WHAT PEOPLE SAY ABOUT GAME STUDIO" />
      <div className="my-10 relative rounded-3xl mx-4 lg:mx-20 py-16 bg-secondary">
        <CarouselTestimonial />
      </div>
    </section>
  );
};

export default PeopleSay;
