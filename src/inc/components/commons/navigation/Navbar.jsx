import {
  IconPlain,
  Logo,
  NavbarOffcanvas,
  PlainButton,
  TextLg,
} from "../index";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavItems, RoutesPath } from "../../../config";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/auth";
const Navbar = ({ setProgress }) => {
  // States
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Custom Hooks
  const { user, logout } = useAuth();

  /**
   * RRD Helpers
   */
  const navigate = useNavigate();
  const location = useLocation();

  const onWindowScroll = () => {
    const position = window.pageYOffset;
    position > 0 ? setIsScrolling(true) : setIsScrolling(false);
  };

  /**
   * Triggers When Someone Clicks On Nav Item
   */
  const onLinkClick = (path) => {
    path !== location.pathname && setProgress(30);
    setIsCanvasOpen(false);
  };
  /**
   * Triggers When Someone Clicks On Logo
   */
  const onLogoClick = () => {
    RoutesPath.home !== location.pathname && setProgress(30);
  };

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
        onClick={() => navigate(RoutesPath.login)}
        text="Login"
        icon="fa fa-arrow-right"
        size="large"
      />
    );
  };

  /**
   * Props For Offcanvas
   */
  const offcanvasProps = {
    isOpen: isCanvasOpen,
    setIsCanvasOpen: setIsCanvasOpen,
    onLinkClick: onLinkClick,
  };

  useEffect(() => {
    window.pageYOffset > 0 && setIsScrolling(true);
    window.addEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <>
      {!location.pathname.includes("/dashboard") && (
        <header
          className={`${
            isScrolling ? "bg-secondary" : "bg-inherit"
          } z-[2] w-full fixed transition-all duration-500 py-4`}
        >
          <div className="flex justify-between mx-6 md:mx-0 md:justify-around items-center">
            <Link to={RoutesPath.home} onClick={() => onLogoClick()}>
              <Logo width={56} />
            </Link>
            <nav className="nav-items items-center gap-7 hidden md:flex">
              {NavItems.App.map((item) => {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => onLinkClick(item.path)}
                  >
                    <TextLg text={item.text} classes="font-semibold" />
                  </Link>
                );
              })}
            </nav>
            <div className="hidden md:block">{AuthButtons()}</div>
            <div className="hamburger md:hidden">
              <button onClick={() => setIsCanvasOpen(!isCanvasOpen)}>
                <IconPlain classes="bars text-white !text-2xl" />
              </button>
              <NavbarOffcanvas {...offcanvasProps} />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
