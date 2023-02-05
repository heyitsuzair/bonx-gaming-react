import { Logo, PlainButton, TextLg, TextSm } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { NavItems, RoutesPath } from "../../../config";
const Navbar = () => {
  /**
   * Navigation
   */
  const navigate = useNavigate();

  return (
    <header className="absolute top-4 z-[1] w-full">
      <div className="flex justify-around items-center">
        <Logo />
        <div className="nav-items flex items-center gap-7">
          {NavItems.map((item) => {
            return (
              <Link key={item.path} to={item.path}>
                <TextLg text={item.text} classes="font-semibold" />
              </Link>
            );
          })}
        </div>
        <div>
          <PlainButton
            onClick={() => navigate(RoutesPath.signup)}
            text="Signup"
            icon="fa fa-arrow-right"
            size="large"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
