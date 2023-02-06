import React, { useRef } from "react";
import { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";
import { TextMd } from "../index";

const Counter = ({ end, text, icon, color }) => {
  const ref = useRef(null);

  const { start } = useCountUp({ ref, end, duration: 1.5 });

  // ?Trigger Count Start When Visitor Reaches To Element--------------------------->
  const handleWaypointEnter = () => {
    start();
  };
  // !Trigger Count Start When Visitor Reaches To Element--------------------------->

  return (
    <Waypoint onEnter={handleWaypointEnter}>
      <div className="counter text-center">
        {icon && <i className={`${icon} text-large text-secondary`}></i>}
        <div className="counter-value my-4">
          <span
            ref={ref}
            className={`text-4xl md:text-6xl start font-bold metal ${color}`}
          />
        </div>
        <TextMd text={text} />
      </div>
    </Waypoint>
  );
};

export default Counter;
