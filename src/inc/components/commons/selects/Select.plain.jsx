import React from "react";
import { TextError } from "../index";

const SelectPlain = ({
  id,
  name,
  placeholder,
  onChange,
  label,
  error,
  errorText,
  value,
  onBlur,
  options,
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
      <select
        name={name}
        onBlur={onBlur}
        id={id}
        value={value}
        onChange={onChange}
        className="border outline-0 bg-white rounded-lg p-3 w-full"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </div>
  );
};

export default SelectPlain;
