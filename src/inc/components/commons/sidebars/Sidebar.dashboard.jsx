import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItems } from "../../../config";
import { useAuth } from "../../../hooks/auth";
import { TextLg } from "../index";

const SidebarDashboard = () => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="lg:h-screen lg:fixed w-full lg:w-[24%] border-r-2 border-secondary-90 bg-secondary-70 p-5 flex flex-col gap-5">
      {NavItems.Dashboard.map((item) => {
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`border-2 ${
              item.path === location.pathname
                ? "border-primary"
                : "border-secondary-90"
            } transition-all duration-400 hover:border-primary p-3 rounded-lg`}
          >
            <TextLg text={item.text} classes="font-semibold" />
          </Link>
        );
      })}
      <button
        onClick={logout}
        className="border-2 border-secondary-90 transition-all duration-400 hover:border-primary p-3 rounded-lg"
      >
        <TextLg text="LOGOUT" classes="font-semibold text-start" />
      </button>
    </aside>
  );
};

export default SidebarDashboard;
