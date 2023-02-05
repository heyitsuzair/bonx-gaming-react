import { toast } from "react-toastify";

const ErrorMessage = (msg) => {
  return toast.error(msg);
};

export default ErrorMessage;
