import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

export const getAuthToken = () => {
  const { user } = useContext(AuthContext);
  return user.token;
};
