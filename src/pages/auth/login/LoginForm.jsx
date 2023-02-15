import React from "react";
import {
  ErrorMessage,
  InputPlain,
  PlainButton,
  Text6Xl,
  TextMd,
} from "../../../inc/components/commons";
import { useFormik } from "formik";
import { Auth } from "../../../inc/yupSchemas/auth";
import { useNavigate } from "react-router";
import { RoutesPath } from "../../../inc/config";
import { useAuth, useLogin } from "../../../inc/hooks/auth";
import { setCookie } from "../../../inc/utils";

const LoginForm = () => {
  const { mutate, isLoading } = useLogin();
  const { setUser } = useAuth();

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 200) return ErrorMessage(response.data.msg);
    setCookie("bonx-user", data);
    navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.myGames);
    setUser(data);
  };

  const onError = ({ message }) => {
    ErrorMessage(message);
  };

  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Login Form
   */
  const onSubmit = (values) => {
    mutate(values, {
      onError,
      onSuccess,
    });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: Auth.login,
    onSubmit,
  });

  return (
    <div className="md:-mt-12">
      <Text6Xl text="LOGIN" classes="font-bold text-center my-14" />
      <div className="grid grid-cols-12 justify-center gap-7">
        <div className="col-span-12">
          <InputPlain
            placeholder="Email Address"
            type="email"
            name="email"
            error={errors.email && touched.email}
            errorText={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <div className="col-span-12">
          <InputPlain
            placeholder="Password"
            type="password"
            name="password"
            error={errors.password && touched.password}
            errorText={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>
        <div className="col-span-12 text-center">
          <PlainButton
            onClick={() => handleSubmit()}
            text="Login"
            icon="fa fa-arrow-right"
            isWidthFull
            buttonColor="bg-primary"
            isLoading={isLoading}
            isDisabled={isLoading}
          />
        </div>
        <div className="col-span-12 text-center">
          <div className="flex items-center justify-center gap-1">
            <TextMd text="Do not have any account?" />
            <button type="button" onClick={() => navigate(RoutesPath.signup)}>
              <TextMd
                text="Signup here"
                classes="!text-yellow-300 font-semibold"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
