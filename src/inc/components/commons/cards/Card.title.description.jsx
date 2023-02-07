import React from "react";
import Text3Xl from "../text/Text.3xl";
import TextMd from "../text/Text.md";

const CardTitleDescription = ({ bg, img, title, description, link }) => {
  return (
    <div
      className="py-16 h-[29rem] w-[20rem] sm:w-[29rem] flex flex-col gap-5 items-center justify-between bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {img && <img src={img} />}
      <div className="flex flex-col gap-6">
        <Text3Xl text={title} classes="font-bold uppercase text-center" />
        {link ? (
          <a href={link}>
            <TextMd
              text={description}
              classes="font-medium text-center hover:text-primary transition-all max-w-[18rem]"
            />
          </a>
        ) : (
          <TextMd
            text={description}
            classes="font-medium text-center max-w-[18rem]"
          />
        )}
      </div>
    </div>
  );
};

export default CardTitleDescription;
