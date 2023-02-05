import React from "react";
import { TextError } from "../index";

const Radio = ({
  id,
  name,
  onChange,
  label,
  error,
  errorText,
  value,
  isChecked,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={isChecked}
        />
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        )}
      </div>

      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </div>
  );
};

export default Radio;
