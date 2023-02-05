import React from "react";

const Logo = ({ height, width }) => {
  /**
   * Image Dimensions
   */
  let DIMENSIONS = `w-${width ? width : "28"} h-${height ? height : "20"}`;

  /**
   * Path
   */
  const logo = "/img/logo.webp";

  return (
    <img src={logo} alt="Loading..." className={`${DIMENSIONS} object-cover`} />
  );
};

export default Logo;
