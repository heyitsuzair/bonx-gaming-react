import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarDashboard from "../../../inc/components/commons/sidebars/Sidebar.dashboard";
import { RoutesPath } from "../../../inc/config";
import { MyGames, AddGame } from "../index";

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
      <div className="grid grid-cols-12 gap-4 p-3 lg:p-0">
        <div className="col-span-12 lg:col-span-3">
          <SidebarDashboard />
        </div>
        <div className="col-span-12 lg:col-span-9 my-5">
          {location.pathname === RoutesPath.dashboard.myGames && <MyGames />}
          {location.pathname === RoutesPath.dashboard.addGame && <AddGame />}
        </div>
      </div>
    </div>
  );
};

export default Main;
