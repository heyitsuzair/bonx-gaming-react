import React from "react";

const TextXl = ({ classes, text }) => {
  return (
    <h1 className={`text-md md:text-xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default TextXl;
