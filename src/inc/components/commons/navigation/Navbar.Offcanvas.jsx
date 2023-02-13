import React from "react";
import { NavItems, RoutesPath } from "../../../config";
import IconPlain from "../icons/Icon.plain";
import { Link, useNavigate } from "react-router-dom";
import Text4Xl from "../text/Text.4xl";
import Logo from "../image/Logo";
import PlainButton from "../buttons/PlainButton";
import { useAuth } from "../../../hooks/auth";

const NavbarOffcanvas = ({ isOpen, setIsCanvasOpen, onLinkClick }) => {
  const canvasState = isOpen ? "-translate-x-0" : "-translate-x-full";
  const overlayState = !isOpen ? "hidden" : "fixed";

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  // Custom Hooks
  const { user, logout } = useAuth();

  /**
   * @function AuthButtons
   *
   * Shows Login If User Is Logged Out
   *
   * Shows Logout And Dashboard If User Is Logged In
   */

  const AuthButtons = () => {
    return user ? (
      <PlainButton
        onClick={logout}
        text="Logout"
        icon="fa fa-arrow-right"
        size="large"
      />
    ) : (
      <PlainButton
        onClick={() => {
          setIsCanvasOpen(!isOpen), navigate(RoutesPath.login);
        }}
        text="Login"
        icon="fa fa-arrow-right"
        size="large"
      />
    );
  };

  return (
    <>
      <div
        className={`overlay ${overlayState} h-screen w-screen top-0 right-0 bg-[rgba(0,0,0,0.4)]`}
        onClick={() => setIsCanvasOpen(!isOpen)}
      ></div>
      <div
        className={`bg-secondary w-3/4 transition-all ${canvasState} duration-1000 ease-in-out h-screen top-0 fixed left-0 ${canvasState} `}
      >
        <div className="flex flex-row items-center m-6 justify-between">
          <Logo width="44" height="16" />
          <button onClick={() => setIsCanvasOpen(!isOpen)}>
            <IconPlain classes="close text-white !text-3xl" />
          </button>
        </div>
        <nav className="flex flex-col gap-7 mx-6 mt-20">
          {NavItems.App.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => onLinkClick(item.path)}
              >
                <Text4Xl text={item.text} classes="font-semibold" />
              </Link>
            );
          })}
          <div className="-ml-4 mt-4">{AuthButtons()}</div>
        </nav>
      </div>
    </>
  );
};

export default NavbarOffcanvas;
