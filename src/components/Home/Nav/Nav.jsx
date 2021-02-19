import "./Nav.scss";

import { Link } from "react-router-dom";

// import icons
import { ReactComponent as LogoIcon } from "../../../assets/icons/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/Humberger.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__menu">
      </div>
      <Link to="/" className="nav__logo">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default Nav;
