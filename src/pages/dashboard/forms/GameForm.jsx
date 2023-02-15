import React, { useState } from "react";
import {
  InputFile,
  InputPlain,
  PlainButton,
  SelectPlain,
  TextAreaPlain,
} from "../../../inc/components/commons";
import { convertToBase64 } from "../../../inc/utils";

const GameForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  isLoading,
  setFieldValue,
  setFieldTouched,
  setBanner,
  setFile,
  file,
  banner,
  isUpdate,
}) => {
  const categories = [
    { value: "1", text: "Action" },
    { value: "2", text: "Adventure" },
  ];

  /**
   * @function onFileChange
   *
   * Triggers When Game File Uploads
   */
  const onFileChange = async (file) => {
    const file64 = await convertToBase64(file);
    setFieldTouched("game_file", true);
    setFieldValue("game_file", file64);
    setFile(file);
  };
  /**
   * @function onBannerChange
   *
   * Triggers When Game Banner Uploads
   */
  const onBannerChange = async (banner) => {
    const banner64 = await convertToBase64(banner);
    setFieldTouched("banner", true);
    setFieldValue("banner", banner64);
    setBanner(banner64);
  };

  return (
    <div className="lg:w-[98%] border-2 border-secondary-90 bg-secondary-70 my-5 p-5 rounded-lg">
      <div className="grid grid-cols-12 gap-4 items-start">
        <div className="col-span-12">
          <InputPlain
            placeholder="Title"
            name="title"
            error={errors.title && touched.title}
            errorText={errors.title}
            value={values.title}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <InputPlain
            placeholder="Short Description"
            name="short_description"
            error={errors.short_description && touched.short_description}
            errorText={errors.short_description}
            value={values.short_description}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextAreaPlain
            placeholder="Long Description"
            name="long_description"
            error={errors.long_description && touched.long_description}
            errorText={errors.long_description}
            value={values.long_description}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextAreaPlain
            placeholder="Features"
            name="features"
            error={errors.features && touched.features}
            errorText={errors.features}
            value={values.features}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <TextAreaPlain
            placeholder="Whats New"
            name="whats_new"
            error={errors.whats_new && touched.whats_new}
            errorText={errors.whats_new}
            value={values.whats_new}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <InputPlain
            placeholder="Total Installs"
            type="number"
            name="installs"
            error={errors.installs && touched.installs}
            errorText={errors.installs}
            value={values.installs}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <InputPlain
            placeholder="Current Version"
            name="current_version"
            error={errors.current_version && touched.current_version}
            errorText={errors.current_version}
            value={values.current_version}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SelectPlain
            placeholder="Select Category"
            name="category"
            error={errors.category && touched.category}
            errorText={errors.category}
            value={values.category}
            onBlur={handleBlur}
            onChange={handleChange}
            options={categories}
          />
        </div>
        <div className="col-span-12">
          <InputFile
            name="game_file"
            placeholder="Please Upload Game File"
            error={errors.game_file && touched.game_file}
            errorText={errors.game_file}
            value={file}
            onChange={onFileChange}
            fileTypes={["APK"]}
          />
        </div>
        <div className="col-span-12">
          <InputFile
            name="banner"
            placeholder="Please Upload Game Banner"
            error={errors.banner && touched.banner}
            errorText={errors.banner}
            value={banner}
            isImage
            onChange={onBannerChange}
            fileTypes={["PNG", "JPEG", "JPG", "WEBP"]}
          />
        </div>
        <div className="col-span-12">
          <PlainButton
            onClick={() => handleSubmit()}
            text={isUpdate ? "Update" : "Add Game"}
            buttonColor="bg-primary"
            isLoading={isLoading}
            isDisabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default GameForm;
