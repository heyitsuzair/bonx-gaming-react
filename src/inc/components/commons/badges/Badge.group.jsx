import React from "react";
import { BadgePlain } from "../index";

const BadgeGroup = ({
  badgeClasses,
  badgesArray,
  activeBadge,
  onBadgeClick,
}) => {
  /**
   * Badge Background Color
   */
  const bgColor = badgeClasses
    ? badgeClasses
    : "hover:!bg-yellow-300 cursor-pointer hover:!text-black py-1.5 px-4";

  /**
   * @function badgeState Returns the classes of active badge if @param {index} === @state {activeBadge} else it returns the default badge classes
   */
  const badgeState = (index) => {
    return activeBadge === index
      ? "bg-yellow-300 !text-black"
      : "bg-gray-100 !text-gray-500";
  };

  return (
    <div className="flex gap-3 items-center">
      {badgesArray.map((badge, index) => {
        return (
          <div
            key={index}
            onClick={onBadgeClick ? () => onBadgeClick(index) : null}
          >
            <BadgePlain
              text={badge}
              classes={`${badgeState(index)} ${bgColor}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BadgeGroup;
