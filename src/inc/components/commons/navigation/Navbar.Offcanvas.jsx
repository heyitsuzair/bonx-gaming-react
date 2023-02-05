import React from "react";
import { NavItems } from "../../../config";
import IconPlain from "../icons/Icon.plain";
import { Link } from "react-router-dom";
import TextLg from "../text/Text.lg";
import Text3Xl from "../text/Text.3xl";
import Text4Xl from "../text/Text.4xl";
import Logo from "../image/Logo";
import PlainButton from "../buttons/PlainButton";

const NavbarOffcanvas = ({ isOpen, setIsCanvasOpen }) => {
  const canvasState = isOpen ? "-translate-x-0" : "-translate-x-full";
  const overlayState = !isOpen ? "hidden" : "fixed";

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
          <Logo width="24" height="16" />
          <button onClick={() => setIsCanvasOpen(!isOpen)}>
            <IconPlain classes="close text-white !text-3xl" />
          </button>
        </div>
        <nav className="flex flex-col gap-7 mx-6 mt-20">
          {NavItems.map((item) => {
            return (
              <Link key={item.path} to={item.path}>
                <Text4Xl text={item.text} classes="font-semibold" />
              </Link>
            );
          })}
          <div className="-ml-4 mt-4">
            <PlainButton
              onClick={() => navigate(RoutesPath.signup)}
              text="Signup"
              icon="fa fa-arrow-right"
              size="large"
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarOffcanvas;
