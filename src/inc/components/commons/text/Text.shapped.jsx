import React from "react";
import Text3Xl from "./Text.3xl";

const TextShapped = ({ text, classes }) => {
  /**
   * Shape Image
   */
  const SHAPE_IMG = "/img/text-mini-shape.webp";
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-4 md:py-6 md:px-24"
      style={{ backgroundImage: `url(${SHAPE_IMG})` }}
    >
      <Text3Xl text={text} classes={classes} />
    </div>
  );
};

export default TextShapped;
