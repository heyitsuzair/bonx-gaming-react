import React from "react";
import TextError from "../text/Text.error";
import Radio from "./Radio.plain";

const RadioGroup = ({
  radiosArray,
  handleChange,
  error,
  errorText,
  values,
}) => {
  return (
    <>
      <div className="flex md:items-center flex-col md:flex-row justify-between gap-4">
        {radiosArray.map((radio) => {
          return (
            <Radio
              key={radio.id}
              label={radio.label}
              id={radio.id}
              name="method"
              onChange={handleChange}
              value={radio.value}
              isChecked={values.method === radio.value}
            />
          );
        })}
      </div>
      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </>
  );
};

export default RadioGroup;
