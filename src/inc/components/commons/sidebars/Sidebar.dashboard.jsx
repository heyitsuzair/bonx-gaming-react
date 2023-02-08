import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../../config";
import { TextLg } from "../index";

const SidebarDashboard = () => {
  return (
    <aside className="h-screen fixed w-[24%] border-r-2 border-secondary-90 bg-secondary-70 p-5 flex flex-col gap-5">
      {NavItems.Dashboard.map((item) => {
        return (
          <Link
            key={item.path}
            to={item.path}
            className="border-2 border-secondary-90 transition-all duration-400 hover:border-primary p-3 rounded-lg"
          >
            <TextLg text={item.text} classes="font-semibold" />
          </Link>
        );
      })}
    </aside>
  );
};

export default SidebarDashboard;
