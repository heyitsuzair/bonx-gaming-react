import axios from "axios";
import { readCookie } from "../utils";

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/";

const client = axios.create({ baseURL });

const user = readCookie("bonx-user");

export const Request = ({ ...options }) => {
  if (options.isAuthenticated) {
    client.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
