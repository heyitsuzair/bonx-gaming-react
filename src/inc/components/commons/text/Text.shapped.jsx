import React from "react";
import { Images } from "../../../config";
import Text3Xl from "./Text.3xl";

const TextShapped = ({ text, classes }) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-4 md:py-6 md:px-24"
      style={{ backgroundImage: `url(${Images.text.shape})` }}
    >
      <Text3Xl text={text} classes={classes} />
    </div>
  );
};

export default TextShapped;
