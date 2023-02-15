import { useContext } from "react";
import { useMutation } from "react-query";
import { Request, RequestConfig } from "../../config";
import { AuthContext } from "../../context/auth";

const onSignUp = (credentials) => {
  RequestConfig.auth.signup.data = credentials;
  return Request(RequestConfig.auth.signup);
};
const onLogin = (credentials) => {
  RequestConfig.auth.login.data = credentials;
  return Request(RequestConfig.auth.login);
};
export const onUpdate = ([credentials, token]) => {
  RequestConfig.auth.update.token = token;
  RequestConfig.auth.update.data = credentials;
  return Request(RequestConfig.auth.update);
};

export const useSignup = () => {
  return useMutation(onSignUp);
};
export const useLogin = () => {
  return useMutation(onLogin);
};
export const useUpdateUser = () => {
  return useMutation(onUpdate);
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  const { logout, user, setUser } = authContext;

  return { logout, user, setUser };
};
