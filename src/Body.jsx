import React from "react";

const Body = ({ children }) => {
  /**
   * Image For Body
   */
  const BODY_IMG = "/img/body-bg-75163e67f04c506397c3885b6dcce035.webp";

  return <div style={{ backgroundImage: `url(${BODY_IMG})` }}>{children}</div>;
};

export default Body;
