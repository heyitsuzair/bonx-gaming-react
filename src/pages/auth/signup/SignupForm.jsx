import React from "react";
import {
  ErrorMessage,
  InputPlain,
  PlainButton,
  SuccessMessage,
  Text6Xl,
  TextMd,
} from "../../../inc/components/commons";
import { useFormik } from "formik";
import { Auth } from "../../../inc/yupSchemas/auth";
import { useNavigate } from "react-router";
import { RoutesPath } from "../../../inc/config";
import { useSignup } from "../../../inc/hooks/auth";

const SignupForm = () => {
  const { mutate, isLoading } = useSignup();

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 201) return ErrorMessage(response.data.msg);
    SuccessMessage(data.msg);
    navigate(RoutesPath.login);
  };

  const onError = ({ message }) => {
    ErrorMessage(message);
  };

  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Signup Form
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
    name: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Auth.signup,
      onSubmit,
    });

  return (
    <div className="md:-mt-12">
      <Text6Xl text="Register" classes="font-bold text-center my-14" />
      <div className="grid grid-cols-12 justify-center gap-7">
        <div className="col-span-12">
          <InputPlain
            placeholder="Full Name"
            name="name"
            error={errors.name && touched.name}
            errorText={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </div>
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
            text="Signup"
            icon="fa fa-arrow-right"
            isWidthFull
            buttonColor="bg-primary"
            isLoading={isLoading}
            isDisabled={isLoading}
          />
        </div>
        <div className="col-span-12 text-center">
          <div className="flex items-center justify-center gap-1">
            <TextMd text="Already Have An Account?" />
            <button type="button" onClick={() => navigate(RoutesPath.login)}>
              <TextMd
                text="Login here"
                classes="!text-yellow-300 font-semibold"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
