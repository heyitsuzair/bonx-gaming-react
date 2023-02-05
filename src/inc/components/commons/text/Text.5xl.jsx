import React from "react";

const Text5Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-3xl md:text-5xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text5Xl;
