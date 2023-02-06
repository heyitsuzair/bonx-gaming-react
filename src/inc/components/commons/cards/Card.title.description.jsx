import React from "react";
import Text3Xl from "../text/Text.3xl";
import TextMd from "../text/Text.md";

const CardTitleDescription = ({ bg, img, title, description }) => {
  return (
    <div
      className="py-20 h-[29rem] w-[20rem] sm:w-[29rem] flex flex-col gap-7 items-center justify-center bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {img && <img src={img} />}
      <Text3Xl text={title} classes="font-bold uppercase text-center" />
      <TextMd
        text={description}
        classes="font-medium text-center max-w-[18rem]"
      />
    </div>
  );
};

export default CardTitleDescription;
