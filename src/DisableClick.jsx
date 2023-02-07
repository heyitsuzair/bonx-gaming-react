import React, { useEffect } from "react";

const DisableClick = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      process.env.VITE_IN_PRODUCTION && e.preventDefault();
    });
  }, []);
};

export default DisableClick;
