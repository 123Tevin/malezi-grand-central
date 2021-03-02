import "./HomeSectionTwo.scss";

import { Link } from "react-router-dom";

import { ReactComponent as ImageOne } from "../../../assets/images/img1.svg";
import { ReactComponent as BtnOne } from "../../../assets/images/btn1.svg";
import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";

function HomeSectionTwo() {
  return (
    <div className="home-two">
      <div className="home-two__wrapper">
        <div className="home-two__left">
          <ImageOne />
        </div>
        <div className="home-two__right">
          <h3 className="home-two__right--title">
            OUR LATEST STORIES, RESEARCH, <br />
            AND NEWS
          </h3>
          <p className="home-two__right--desc">
            We achieve this through the use of modern and powerful technology
            including mobile, cloud, artificial intelligence and machine
            learning.
          </p>
          <Link to="/focus" className="home-two__right--btn">
            <BtnOne />
          </Link>
        </div>
      </div>
      <h2 className="home-two__bottom">
        <span>OUR FOCUS</span>
      </h2>
      <div className="lineIcon">
        <LineSixIcon />
        <Triange />
        <LineSixIcon />
      </div>
    </div>
  );
}

export default HomeSectionTwo;
