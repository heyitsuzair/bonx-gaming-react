import React from "react";
import { TextError } from "../index";

const TextAreaPlain = ({
  id,
  name,
  placeholder,
  onChange,
  label,
  error,
  errorText,
  value,
  onBlur,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-primary"
        >
          {label}
        </label>
      )}
      <textarea
        rows={10}
        name={name}
        value={value}
        onBlur={onBlur}
        id={id}
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

export default TextAreaPlain;
