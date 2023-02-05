import {
  IconPlain,
  Logo,
  NavbarOffcanvas,
  PlainButton,
  TextLg,
} from "../index";
import { Link, useNavigate } from "react-router-dom";
import { NavItems, RoutesPath } from "../../../config";
import { useState } from "react";
const Navbar = () => {
  // States
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  return (
    <header className="absolute top-4 z-[1] w-full">
      <div className="flex justify-between mx-6 md:mx-0 md:justify-around items-center">
        <Logo />
        <nav className="nav-items items-center gap-7 hidden md:flex">
          {NavItems.map((item) => {
            return (
              <Link key={item.path} to={item.path}>
                <TextLg text={item.text} classes="font-semibold" />
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <PlainButton
            onClick={() => navigate(RoutesPath.signup)}
            text="Signup"
            icon="fa fa-arrow-right"
            size="large"
          />
        </div>
        <div className="hamburger md:hidden">
          <button onClick={() => setIsCanvasOpen(!isCanvasOpen)}>
            <IconPlain classes="bars text-white !text-2xl" />
          </button>
          <NavbarOffcanvas
            isOpen={isCanvasOpen}
            setIsCanvasOpen={setIsCanvasOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
