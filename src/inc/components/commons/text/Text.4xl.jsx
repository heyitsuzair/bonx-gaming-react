import React from "react";

const Text4Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-2xl md:text-4xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text4Xl;
