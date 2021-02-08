import "./Footer.scss";

import { ReactComponent as LogoTwoIcon } from "../../../assets/icons/Logo2.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <LogoTwoIcon />
      </div>
      <p>© 2021 Malezi. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
