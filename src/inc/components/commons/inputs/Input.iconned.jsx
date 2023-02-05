import React from "react";
import IconPlain from "../icons/Icon.plain";
import TextError from "../text/Text.error";

const InputIconned = ({ classes, inputProps, error, errorText, icon }) => {
  return (
    <div>
      <div
        className={`flex items-center gap-4 bg-neutral-800 justify-between rounded-xl ${classes}`}
      >
        <input
          {...inputProps}
          className="bg-inherit w-full placeholder:text-white outline-0 rounded-xl pl-4 text-white"
        />
        <button type="submit">
          <IconPlain
            classes={`${icon} bg-indigo-600 rounded-xl flex items-center justify-center`}
          />
        </button>
      </div>
      {error && <TextError text={errorText} />}
    </div>
  );
};

export default InputIconned;
