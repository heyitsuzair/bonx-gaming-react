import React from "react";
import TextError from "../text/Text.error";
import { PlainButton } from "../index";

const InputButtoned = ({
  classes,
  inputProps,
  error,
  errorText,
  icon,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div>
      <div
        className={`flex items-center gap-4 bg-neutral-800 justify-between rounded-xl ${classes}`}
      >
        <input
          {...inputProps}
          className="bg-inherit w-full placeholder:text-white outline-0 rounded-xl pl-4 text-white"
        />
        <PlainButton onClick={onButtonClick} text={buttonText} icon={icon} />
      </div>
      {error && <TextError text={errorText} />}
    </div>
  );
};

export default InputButtoned;
