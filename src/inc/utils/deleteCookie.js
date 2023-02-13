import { setCookie } from "./setCookie";

export const deleteCookie = (name) => {
  setCookie(name, null, -1);
};
