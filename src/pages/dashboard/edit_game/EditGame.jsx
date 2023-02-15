import React, { useEffect, useState } from "react";
import {
  ErrorMessage,
  IconPlain,
  SpinnerMedium,
  SuccessMessage,
  TextXl,
} from "../../../inc/components/commons";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";
import { GameForm } from "../forms";
import { useFormik } from "formik";
import { Dashboard } from "../../../inc/yupSchemas";
import { useEditGame, useGame } from "../../../inc/hooks/games";
import { bytesToMbs } from "../../../inc/utils";
import { useAuth } from "../../../inc/hooks/auth";

const EditGame = () => {
  const { id } = useParams();

  // Custom Hooks
  const { data, isLoading } = useGame(id);

  // States
  const [file, setFile] = useState(null);
  const [banner, setBanner] = useState(null);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  // Custom Hooks
  const { mutate, isLoading: isGameUpdating } = useEditGame();
  const { user } = useAuth();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 200) return ErrorMessage(response.data.msg);
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
    mutate([id, values, user.token], {
      onError,
      onSuccess,
    });
  };

  const [initialValues, setInitialValues] = useState({
    title: "",
    short_description: "",
    long_description: "",
    features: "",
    whats_new: "",
    installs: "",
    current_version: "",
    category: "",
    game_file: null,
    banner: null,
  });

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
    validationSchema: Dashboard.EditGameForm,
    onSubmit,
    enableReinitialize: true,
  });

  /**
   * Props For Game Form
   */
  const gameFormProps = {
    values,
    errors,
    handleSubmit,
    touched,
    isLoading: isGameUpdating,
    isUpdate: true,
    handleBlur,
    handleChange,
    setFieldTouched,
    setFieldValue,
    banner,
    setBanner,
    file,
    setFile,
  };

  useEffect(() => {
    if (!id || data?.response?.status === 404)
      return navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.myGames);

    // Set Data As Initial Values
    if (data) {
      setInitialValues({
        title: data.data.title,
        short_description: data.data.short_description,
        long_description: data.data.long_description,
        features: data.data.features,
        whats_new: data.data.whats_new,
        installs: data.data.installs,
        current_version: data.data.current_version,
        category: data.data.category,
        game_file: null,
        banner: null,
      });
      setBanner(data?.data?.banner.replace("http", "https"));
      setFile(`A File Of Size ${bytesToMbs(data?.data?.game_file.size)}`);
    }
  }, [data]);

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
        {isLoading ? (
          <div className="lg:w-[98%] border-2 text-center flex items-center justify-center h-[79vh] border-secondary-90 bg-secondary-70 my-5 p-5 rounded-lg">
            <SpinnerMedium />
          </div>
        ) : (
          <GameForm {...gameFormProps} />
        )}
      </div>
    </div>
  );
};

export default EditGame;
