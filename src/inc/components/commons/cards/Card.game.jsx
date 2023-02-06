import React, { useState } from "react";
import PlainButton from "../buttons/PlainButton";
import { useNavigate } from "react-router-dom";
import { Images, RoutesPath } from "../../../config";

const CardGame = () => {
  // States
  const [isHovered, setIsHovered] = useState(false);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const classes = {
    card: "game-card relative",
    overlay: `absolute flex items-center justify-center overlay rounded-3xl bg-[rgb(9,0,42,0.5)] h-full w-full border-[0.5rem] border-gray-400 transition-all duration-300 ${
      isHovered ? "opacity-100" : "opacity-0"
    }`,
    img: "w-full h-full object-cover rounded-xl",
  };

  return (
    <div
      className={classes.card}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classes.overlay}>
        <PlainButton
          text="Game Details"
          icon="fa fa-arrow-right"
          onClick={() => navigate(RoutesPath.games + "/1")}
          size="large"
        />
      </div>
      <img src={Images.gameSample} alt="Loading..." className={classes.img} />
    </div>
  );
};

export default CardGame;
