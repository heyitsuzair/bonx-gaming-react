import React from "react";

const Text9Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-6xl md:text-9xl text-white ${classes || ""}`}>
      {text}
    </h1>
  );
};

export default Text9Xl;
