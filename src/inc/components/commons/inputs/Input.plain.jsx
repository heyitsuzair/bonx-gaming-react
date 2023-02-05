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
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        onBlur={onBlur}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border outline-0 rounded-lg p-3 w-full"
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
