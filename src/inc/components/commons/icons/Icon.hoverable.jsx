import React from "react";

const IconHoverable = ({ classes, icon }) => {
  return (
    <div
      className={`hover:bg-yellow-500 hover:border-yellow-500 w-20 h-20 transition-all rounded-full flex items-center justify-center border-2 border-white ${classes}`}
    >
      <i className={`text-white ${icon}`} aria-hidden="true"></i>
    </div>
  );
};

export default IconHoverable;
