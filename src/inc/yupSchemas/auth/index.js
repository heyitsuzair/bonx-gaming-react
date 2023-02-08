import * as Yup from "yup";

export const Auth = {
  login: Yup.object({
    email: Yup.string()
      .email("Please Enter Valid Email")
      .required("Please Enter Your Email"),
    password: Yup.string().required("Please Enter Password"),
  }),
  signup: Yup.object({
    email: Yup.string()
      .email("Please Enter Valid Email")
      .required("Please Enter Your Email"),
    password: Yup.string().required("Please Enter Password"),
    name: Yup.string().required("Please Enter Your Name"),
  }),
};
