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
          className="block mb-2 text-sm font-medium text-gray-900"
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
        className="border outline-0 rounded-lg p-4 w-full"
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
