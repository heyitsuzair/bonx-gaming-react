import React from "react";

const Text3Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-xl md:text-3xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text3Xl;
