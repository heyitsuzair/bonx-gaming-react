import React from "react";
import { Images } from "../../../config";
import { PlainButton, Text5Xl } from "../index";

const PreFooter = () => {
  return (
    <div className="px-5 md:px-20 py-16">
      <footer id="pre-footer">
        <div
          className="flex flex-col lg:flex-row items-center gap-12 justify-center bg-no-repeat bg-cover rounded-[3.5rem] py-24"
          style={{ backgroundImage: `url(${Images.preFooter.bg})` }}
        >
          <Text5Xl
            text="CONTACT US FOR SOFTWARE DEVELOPMENT."
            classes="font-bold text-center lg:text-start max-w-2xl !leading-[3rem] md:!leading-[4rem]"
          />
          <a className="relative" href="https://wa.link/bgpq3g" target="_blank">
            <div className="z-[1]" style={{ position: "inherit" }}>
              <PlainButton
                icon="fa fa-arrow-right"
                text="Hire Us"
                size="large"
              />
            </div>
            <span className="absolute top-1 md:top-2 left-6 z-[0]">
              <span className="animate-ping inline-flex h-12 w-28 rounded-xl bg-white opacity-60"></span>
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PreFooter;
