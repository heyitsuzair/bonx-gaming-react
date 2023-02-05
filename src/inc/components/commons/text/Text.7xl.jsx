import React from "react";

const Text7Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-4xl md:text-7xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text7Xl;
