import * as Yup from "yup";

export const Dashboard = {
  gameForm: Yup.object({
    title: Yup.string().required("Please Enter Game Title"),
    short_description: Yup.string().required("Please Enter Short Description"),
    long_description: Yup.string().required("Please Enter Long Description"),
    features: Yup.string().required("Please Enter Long Description"),
    whats_new: Yup.string(),
    installs: Yup.string().required("Please Enter Total Installations"),
    current_version: Yup.string().required("Please Enter Current Version"),
    category: Yup.number().required("Please Select Category"),
    game_file: Yup.mixed().required("Please Upload Game File"),
    banner: Yup.mixed().required("Please Upload Game Banner"),
  }),
};
