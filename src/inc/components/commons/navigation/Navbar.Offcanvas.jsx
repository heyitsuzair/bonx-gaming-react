import React from "react";
import {
  IconTitled,
  InputIconned,
  Logo,
  Text3Xl,
  TextLg,
  TextMd,
  TextXl,
} from "../index";

const NavbarOffcanvas = ({ isOpen, setIsCanvasOpen }) => {
  const canvasState = isOpen ? "translate-x-0" : "translate-x-full";
  const overlayState = !isOpen ? "hidden" : "fixed";

  /**
   * Props For Iconned Input
   */
  const inputProps = {
    placeholder: "Enter Email Address",
    name: "email",
  };

  return <div>Offcanvas</div>;
};

export default NavbarOffcanvas;
