import React from "react";
import { DividerPlain, Text5Xl } from "../index";

const HeadingSectionFancy = ({ text }) => {
  return (
    <div className="grid grid-cols-12 items-center justify-center gap-4">
      <div className="col-span-12 lg:col-span-7">
        <Text5Xl
          text={text}
          classes="mx-auto lg:pl-20 font-bold text-center lg:text-start max-w-3xl !leading-[4rem] lg:!leading-[5rem]"
        />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <DividerPlain />
      </div>
    </div>
  );
};

export default HeadingSectionFancy;
