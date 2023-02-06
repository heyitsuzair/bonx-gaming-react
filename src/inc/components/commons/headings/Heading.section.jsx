import React from "react";
import { Text5Xl, TextLg } from "../index";

const HeadingSection = ({ text, subTitle }) => {
  return (
    <>
      <Text5Xl
        text={text}
        classes="font-bold max-w-3xl mx-auto text-center !leading-[5rem]"
      />
      {subTitle && (
        <TextLg
          classes="font-medium text-center mx-auto max-w-xl mt-1"
          text={subTitle}
        />
      )}
    </>
  );
};

export default HeadingSection;
