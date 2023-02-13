import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/";

const client = axios.create({ baseURL });

export const Request = ({ ...options }) => {
  if (options.isAuthenticated) {
    client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "bonx-user"
    )}`;
  }
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
