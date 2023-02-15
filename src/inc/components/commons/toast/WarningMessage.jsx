import { toast } from "react-toastify";

const WarningMessage = (msg) => {
  return toast.warn(msg);
};

export default WarningMessage;
