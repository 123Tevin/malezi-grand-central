import "./HomeSectionTwo.scss";

import { ReactComponent as ImageOne } from "../../../assets/images/img1.svg";
import { ReactComponent as BtnOne } from "../../../assets/images/btn1.svg";
import { ReactComponent as LineOne } from "../../../assets/images/line1.svg";

function HomeSectionTwo() {
  return (
    <div className="home-two">
      <div className="home-two__wrapper">
        <div className="home-two__left">
          <ImageOne />
        </div>
        <div className="home-two__right">
          <p className="home-two__right--info">Our Focus</p>
          <h3 className="home-two__right--title">
            OUR LATEST STORIES, RESEARCH, AND NEWS
          </h3>
          <p className="home-two__right--desc">
            We achieve this through the use of modern and powerful technology
            including mobile, cloud, artificial intelligence and machine
            learning.
          </p>
          <button className="home-two__right--btn">
            <BtnOne />
          </button>
        </div>
      </div>
      <p className="home-two__bottom">OUR MISSIONS TO ACHIEVE OUR VISION</p>
      <LineOne />
    </div>
  );
}

export default HomeSectionTwo;
