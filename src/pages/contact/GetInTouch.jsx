import { useFormik } from "formik";
import React from "react";
import {
  HeadingSection,
  InputPlain,
  PlainButton,
  SuccessMessage,
  TextAreaPlain,
} from "../../inc/components/commons";
import { ContactFormSchema } from "../../inc/yupSchemas";

const GetInTouch = () => {
  /**
   * @function onSubmit
   *
   * Triggers When Someone Submits Contact Form
   */
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      SuccessMessage("We Will Contact You Soon!");
    }, 2000);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: ContactFormSchema,
    onSubmit,
  });

  return (
    <div>
      <HeadingSection
        text="GET IN TOUCH"
        subTitle="Drop Us Your Query And We Will Get Back To You As Soon As Possible"
      />
      <div className="contact-form my-12">
        <div className="grid grid-cols-12 items-start justify-center gap-4">
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Name"
              name="name"
              error={errors.name && touched.name}
              errorText={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Email"
              name="email"
              type="email"
              error={errors.email && touched.email}
              errorText={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Phone"
              name="phone"
              error={errors.phone && touched.phone}
              errorText={errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Address"
              name="address"
              error={errors.address && touched.address}
              errorText={errors.address}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
          </div>
          <div className="col-span-12">
            <TextAreaPlain
              placeholder="Write Your Message Here"
              name="message"
              error={errors.message && touched.message}
              errorText={errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </div>
          <div className="col-span-12">
            <PlainButton
              onClick={() => handleSubmit()}
              text="Submit"
              icon="fa fa-arrow-right"
              size="large"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
