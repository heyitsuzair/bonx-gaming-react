import React from "react";

const PlainButton = ({
  text,
  icon,
  onClick,
  size,
  buttonColor,
  textColor,
  shadow,
  isDisabled,
  isWidthFull,
}) => {
  let buttonSize = `h-12 w-${isWidthFull ? "full" : "40"}`;
  let buttonBorderRadius = "rounded-lg";
  let buttonShadow = "";
  let btnImage = "";

  /**
   * Check What Size We Got As Prop And Than Set Size And Border Radius Accordingly
   */
  if (size && size === "large") {
    buttonSize = `h-14 w-${isWidthFull ? "full" : "44"} md:h-16 md:w-${
      isWidthFull ? "full" : "44"
    }`;
    buttonBorderRadius = "rounded-xl";
  } else if (size && size === "small") {
    buttonSize = `h-12 w-${isWidthFull ? "full" : "32"}`;
    buttonBorderRadius = "rounded-md";
  }

  /**
   * Check Whether the button color is provided or not
   */
  if (!buttonColor) {
    btnImage = "/img/btn.webp";
  }
  /**
   * Check Whether the text color is provided or not
   */
  if (!textColor) {
    textColor = "text-white";
  }

  /**
   * Check Whether the shadow is provided or not
   */
  if (shadow) {
    buttonShadow = "shadow-2xl";
  }

  return (
    <>
      <div className="hidden w-44 w-52 w-40"></div>
      <button
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        className={`b ${buttonSize} ${
          buttonColor || ""
        } ${textColor} transition-all duration-300 flex justify-center items-center ${buttonBorderRadius} ${buttonShadow} hover:opacity-50 disabled:opacity-60 bg-no-repeat bg-center bg-contain`}
        style={{ backgroundImage: `url(${btnImage && btnImage})` }}
      >
        <span className={`text-center text-lg font-semibold`}>
          {text}

          {icon && (
            <>
              &nbsp; <i className={`fa ${icon}`} aria-hidden="true"></i>
            </>
          )}
        </span>
      </button>
    </>
  );
};

export default PlainButton;
