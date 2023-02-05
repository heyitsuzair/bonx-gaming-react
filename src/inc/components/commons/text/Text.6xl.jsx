import React from "react";

const Text6Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-4xl md:text-6xl text-white ${classes ? classes : ""}`}>
      {text}
    </h1>
  );
};

export default Text6Xl;
