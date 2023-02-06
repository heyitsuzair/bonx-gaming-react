import React from "react";
import { Text3Xl, TextMd, TextXl } from "../index";

const TestimonialPlain = ({ img, description, name, profession }) => {
  return (
    <div className="testimonail">
      <div className="grid grid-cols-12 gap-8 items-center justify-center">
        <div className="col-span-12 lg:col-span-4">
          <img src={img} className="mx-auto w-1/2 lg:w-full" />
        </div>
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <TextXl
            text={description}
            classes="!leading-[2.5rem] text-center lg:text-start mx-10 lg:mx-0"
          />
          <Text3Xl text={name} classes="font-bold text-center lg:text-start" />
          <TextMd
            text={profession}
            classes="text-primary text-center lg:text-start"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPlain;
