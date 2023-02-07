import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Your Email"),
  phone: Yup.string().required("Please Enter Your Phone Number"),
  address: Yup.string().required("Please Enter Your Address"),
  message: Yup.string().required("Please Enter Your Message"),
});
