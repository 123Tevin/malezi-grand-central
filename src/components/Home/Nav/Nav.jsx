import { useState } from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

// import icons
import { ReactComponent as LogoIcon } from "../../../assets/icons/Logo.svg";

function Nav() {
  const [whiteNav, setWhiteNav] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 80) setWhiteNav(true);
    else setWhiteNav(false);
  };

  window.addEventListener("scroll", changeNavBackground);
  return (
    <div className={whiteNav ? "nav nav-active" : "nav"}>
      <div className="nav__menu"></div>
      <Link to="/" className="nav__logo">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default Nav;
