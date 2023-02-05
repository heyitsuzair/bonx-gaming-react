import React from "react";

const Logo = ({ height, width }) => {
  /**
   * Image Dimensions
   */
  let DIMENSIONS = `w-${width || "28"} h-${height || "20"}`;

  /**
   * Path
   */
  const logo = "/img/logo.webp";

  return (
    <>
      <div className="hidden w-24 h-16 w-44"></div>
      <img
        src={logo}
        alt="Loading..."
        className={`${DIMENSIONS} object-cover`}
      />
    </>
  );
};

export default Logo;
