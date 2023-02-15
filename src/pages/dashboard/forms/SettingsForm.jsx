import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../../inc/yupSchemas";
import { useFormik } from "formik";
import {
  ErrorMessage,
  InputPlain,
  PlainButton,
  SuccessMessage,
} from "../../../inc/components/commons";
import { useAuth, useUpdateUser } from "../../../inc/hooks/auth";
import { setCookie } from "../../../inc/utils";
import { AuthContext } from "../../../inc/context/auth";

const SettingsForm = () => {
  const { setUser } = useContext(AuthContext);

  // Custom Hooks
  const { user } = useAuth();
  const { mutate, isLoading } = useUpdateUser();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 200) return ErrorMessage(response.data.msg);

    const cookieData = {
      token: user.token,
      user_details: {
        _id: user.user_details._id,
        email: values.email,
        name: values.name,
      },
    };

    setCookie("bonx-user", cookieData);
    setUser(cookieData);
    SuccessMessage(data.msg);
    resetForm();
  };

  const onError = ({ message }) => {
    ErrorMessage(message);
  };

  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Settings Form
   */
  const onSubmit = (values) => {
    mutate([values, user.token], {
      onError,
      onSuccess,
    });
  };

  const initialValues = {
    email: user?.user_details.email,
    password: "",
    name: user?.user_details.name,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: Dashboard.settingsFrom,
    onSubmit,
  });

  return (
    <div>
      <div className="lg:w-[98%] h-screen border-2 border-secondary-90 bg-secondary-70 p-5 rounded-lg">
        <div className="grid grid-cols-12 gap-4 items-start">
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
              text="Update"
              icon="fa fa-refresh"
              buttonColor="bg-primary"
              isLoading={isLoading}
              isDisabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
