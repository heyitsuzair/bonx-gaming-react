import React from "react";

const TextMd = ({ classes, text }) => {
  return (
    <h1 className={`text-base md:text-md text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default TextMd;
