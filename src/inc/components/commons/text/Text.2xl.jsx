import React from "react";

const Text2Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-lg md:text-2xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text2Xl;
