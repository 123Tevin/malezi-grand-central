import "./Nav.scss";

// import icons
import { ReactComponent as LogoIcon } from "../../../assets/icons/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/Humberger.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__menu">
        <MenuIcon />
      </div>
      <div className="nav__logo">
        <LogoIcon />
      </div>
    </div>
  );
}

export default Nav;
