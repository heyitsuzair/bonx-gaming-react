import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarDashboard from "../../../inc/components/commons/sidebars/Sidebar.dashboard";
import { RoutesPath } from "../../../inc/config";
import { MyGames } from "../index";

const Main = ({ setProgress }) => {
  const location = useLocation();

  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, [location.pathname]);

  return (
    <div id="dashboard">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <SidebarDashboard />
        </div>
        <div className="col-span-9 h-screen my-5">
          {location.pathname === RoutesPath.dashboard.myGames && <MyGames />}
        </div>
      </div>
    </div>
  );
};

export default Main;
