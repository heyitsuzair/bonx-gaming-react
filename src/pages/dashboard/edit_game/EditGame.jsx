import React, { useState } from "react";
import {
  IconPlain,
  SuccessMessage,
  TextXl,
} from "../../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";
import { GameForm } from "../forms";
import { useFormik } from "formik";
import { Dashboard } from "../../../inc/yupSchemas";

const EditGame = () => {
  // States
  const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Game Form
   */
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      SuccessMessage("Game Added!");
      navigate(RoutesPath.dashboard.myGames);
    }, 2000);
  };

  const initialValues = {
    title: "Edit",
    short_description: "Edit",
    long_description: "Edit",
    features: "Edit",
    whats_new: "Edit",
    installs: 0,
    current_version: "1.0.0",
    category: "",
    game_file: null,
    banner: null,
  };

  const {
    values,
    errors,
    handleSubmit,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: Dashboard.gameForm,
    onSubmit,
  });

  /**
   * Props For Game Form
   */
  const gameFormProps = {
    values,
    errors,
    handleSubmit,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
    banner,
    setBanner,
    file,
    setFile,
  };

  return (
    <div id="edit-games">
      <button
        type="button"
        className="flex items-center gap-3 border-2 border-secondary-90 hover:border-primary transition-all duration-400 rounded-lg py-3 px-5"
        onClick={() =>
          navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.myGames)
        }
      >
        <IconPlain classes="fa fa-arrow-left text-white" />
        <TextXl text="Back" classes="font-bold" />
      </button>
      <div className="add-game-form">
        <GameForm {...gameFormProps} />
      </div>
    </div>
  );
};

export default EditGame;
