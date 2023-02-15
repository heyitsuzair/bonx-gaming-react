import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../config";
import { readCookie, deleteCookie } from "../../utils";

export const AuthContext = createContext();

export default function AuthState({ children }) {
  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const logout = () => {
    deleteCookie("bonx-user");
    navigate(RoutesPath.home);
    setUser(null);
  };

  useEffect(() => {
    setUser(readCookie("bonx-user"));
  }, []);

  return (
    <AuthContext.Provider value={{ logout, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
