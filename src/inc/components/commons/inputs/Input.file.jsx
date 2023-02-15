import React from "react";
import { TextError, TextSm, WarningMessage } from "../index";
import { FileUploader } from "react-drag-drop-files";

const InputFile = ({
  id,
  name,
  onChange,
  label,
  error,
  errorText,
  isRequired,
  placeholder,
  value,
  isImage,
  fileTypes,
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
      <FileUploader
        handleChange={onChange}
        label={placeholder}
        name={name}
        maxSize={10}
        onSizeError={() =>
          WarningMessage("Please Upload File Lesser Than 10 MB")
        }
        classes="bg-secondary !text-white border-2 !border-secondary-90 transition-all duration-400 hover:!border-primary w-full !min-w-[100%]"
        types={fileTypes}
      />
      {value && !isImage && (
        <TextSm text={value.name || value} classes="!text-green-400 mt-1" />
      )}
      {value && isImage && (
        <img src={value} className="w-32 my-4 h-20 object-cover rounded-md" />
      )}

      {error && (
        <div className="mt-1">
          <TextError text={errorText} />
        </div>
      )}
    </div>
  );
};

export default InputFile;
