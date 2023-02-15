import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../../inc/components/commons";
import SidebarDashboard from "../../../inc/components/commons/sidebars/Sidebar.dashboard";
import { RoutesPath } from "../../../inc/config";
import { useAuth } from "../../../inc/hooks/auth";
import { MyGames, AddGame, EditGame, Settings } from "../index";

const Main = ({ setProgress }) => {
  /**
   * RRD Helpers
   */
  const location = useLocation();
  const navigate = useNavigate();

  // Custom Hooks
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      ErrorMessage("Please Login To Access Dashboard");
      navigate(RoutesPath.login);
    }
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, [location.pathname, user]);

  return (
    <div id="dashboard">
      <div className="grid grid-cols-12 gap-4 p-3 lg:p-0">
        <div className="col-span-12 lg:col-span-3">
          <SidebarDashboard />
        </div>
        <div className="col-span-12 lg:col-span-9 my-5">
          {user && (
            <Routes>
              <Route
                path={RoutesPath.dashboard.myGames}
                element={<MyGames />}
              />
              <Route
                path={RoutesPath.dashboard.addGame}
                element={<AddGame />}
              />
              <Route
                path={RoutesPath.dashboard.settings}
                element={<Settings />}
              />
              <Route
                path={RoutesPath.dashboard.myGames + "/:id"}
                element={<EditGame />}
              />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
