import React from "react";
import { TextMd } from "../index";

const TextError = ({ text }) => {
  return <TextMd classes="text-red-400 font-medium" text={text} />;
};

export default TextError;
