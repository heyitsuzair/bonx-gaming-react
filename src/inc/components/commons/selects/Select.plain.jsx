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
  reference,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm text-white font-medium text-g"
        >
          {label} {isRequired && <span className="text-primary">*</span>}
        </label>
      )}
      <select
        name={name}
        onBlur={onBlur}
        ref={reference || null}
        id={id}
        value={value}
        onChange={onChange}
        className="border-2 border-secondary-90 transition-all duration-400 text-white outline-0 rounded-md bg-secondary hover:border-primary py-3 px-4 w-full"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
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
