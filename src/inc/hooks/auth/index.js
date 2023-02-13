import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Request, RequestConfig, RoutesPath } from "../../config";
import { readCookie } from "../../utils";
import { deleteCookie } from "../../utils/deleteCookie";

const onSignUp = (credentials) => {
  RequestConfig.auth.signup.data = credentials;
  return Request(RequestConfig.auth.signup);
};
const onLogin = (credentials) => {
  RequestConfig.auth.login.data = credentials;
  return Request(RequestConfig.auth.login);
};

export const useSignup = () => {
  return useMutation(onSignUp);
};
export const useLogin = () => {
  return useMutation(onLogin);
};

export const useAuth = () => {
  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const user = readCookie("bonx-user");

  const logout = () => {
    deleteCookie("bonx-user");
    navigate(RoutesPath.home);
  };

  return { logout, user };
};
