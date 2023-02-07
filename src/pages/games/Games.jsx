import React, { useEffect } from "react";
import { BreadcrumbTopPage } from "../../inc/components/commons";

const Games = ({ setProgress }) => {
  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <div id="games">
      <BreadcrumbTopPage text="GAMES" />
    </div>
  );
};

export default Games;
