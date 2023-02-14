import React from "react";
import { TextError } from "../index";

const InputPlain = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  label,
  error,
  errorText,
  value,
  onBlur,
  isRequired,
  reference,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-white"
        >
          {label} {isRequired && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        type={type || "text"}
        name={name}
        onBlur={onBlur}
        ref={reference || null}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-secondary-90 transition-all duration-400 text-white outline-0 rounded-md bg-secondary hover:border-primary py-3 px-4 w-full"
      />
      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </div>
  );
};

export default InputPlain;
