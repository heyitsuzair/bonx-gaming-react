import React from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../../inc/yupSchemas";
import { useFormik } from "formik";
import {
  InputPlain,
  PlainButton,
  SuccessMessage,
} from "../../../inc/components/commons";

const SettingsForm = () => {
  /**
   * RRD Helpers
   */
  const navigate = useNavigate();
  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Settings Form
   */
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      SuccessMessage("Updated!");
    }, 2000);
  };

  const initialValues = {
    email: "test@example.com",
    password: "",
    name: "John Doe",
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
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
