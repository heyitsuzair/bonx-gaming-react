import {
  IconPlain,
  Logo,
  NavbarOffcanvas,
  PlainButton,
  TextLg,
} from "../index";
import { Link, useNavigate } from "react-router-dom";
import { NavItems, RoutesPath } from "../../../config";
import { useEffect, useState } from "react";
const Navbar = () => {
  // States
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  const onWindowScroll = () => {
    const position = window.pageYOffset;
    position > 0 ? setIsScrolling(true) : setIsScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolling ? "bg-secondary" : "bg-inherit"
      } z-[1] w-full fixed transition-all duration-500 py-4`}
    >
      <div className="flex justify-between mx-6 md:mx-0 md:justify-around items-center">
        <Link to={RoutesPath.home}>
          <Logo width={56} />
        </Link>
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
