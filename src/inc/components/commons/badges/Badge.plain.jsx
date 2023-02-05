import React from "react";
import TextSm from "../text/Text.sm";

const BadgePlain = ({ classes, text }) => {
  return (
    <TextSm
      text={text}
      classes={`${classes} font-medium rounded-lg transition-all`}
    />
  );
};

export default BadgePlain;
