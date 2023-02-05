import React from "react";
import TextLg from "../text/Text.lg";

const HeadingCircleLeft = ({ textClasses, text }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
      <TextLg
        classes={`text-gray-500 font-medium ${textClasses}`}
        text={text}
      />
    </div>
  );
};

export default HeadingCircleLeft;
