import React, { useState } from "react";
import {
  ErrorMessage,
  IconPlain,
  SuccessMessage,
  TextXl,
} from "../../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";
import { GameForm } from "../forms";
import { useFormik } from "formik";
import { Dashboard } from "../../../inc/yupSchemas";
import { useAddGame } from "../../../inc/hooks/games";

const AddGame = () => {
  // States
  const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  // Custom Hooks
  const { mutate, isLoading } = useAddGame();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 201) return ErrorMessage(response.data.msg);
    SuccessMessage(data.msg);
    navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.myGames);
  };

  const onError = ({ message }) => {
    ErrorMessage(message);
  };

  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Game Form
   */
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("short_description", values.short_description);
    formData.append("long_description", values.long_description);
    formData.append("features", values.features);
    formData.append("installs", values.installs);
    formData.append("whats_new", values.whats_new);
    formData.append("current_version", values.current_version);
    formData.append("category", values.category);
    formData.append("game_file", values.game_file);
    formData.append("banner", values.banner);

    mutate(formData, {
      onError,
      onSuccess,
    });
  };

  const initialValues = {
    title: "",
    short_description: "",
    long_description: "",
    features: "",
    whats_new: "",
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
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: Dashboard.AddGameForm,
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
    isLoading,
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
    <div id="add-games">
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

export default AddGame;
