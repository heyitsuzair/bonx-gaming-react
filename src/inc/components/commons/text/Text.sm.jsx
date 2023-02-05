import React from "react";

const TextSm = ({ classes, text }) => {
  return (
    <h1 className={`text-base md:text-sm text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default TextSm;
