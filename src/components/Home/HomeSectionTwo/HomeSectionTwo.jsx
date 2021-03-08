import "./HomeSectionTwo.scss";

import { Link } from "react-router-dom";

import { ReactComponent as BtnOne } from "../../../assets/images/btn1.svg";
import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";

function HomeSectionTwo() {
  return (
    <div className="home-two">
      <div className="home-two__wrapper">
        <div className="home-two__left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(5).jpg?alt=media&token=6ff64814-e2dd-43d6-be48-93946699da2d"
            alt="Children Learning"
          />
        </div>
        <div className="home-two__right">
          <h3 className="home-two__right--title">
            OUR LATEST STORIES, RESEARCH, AND NEWS
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
