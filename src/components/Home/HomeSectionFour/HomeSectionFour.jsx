import { ReactComponent as ImageFour } from "../../../assets/icons/img4.svg";
import { ReactComponent as ImageFive } from "../../../assets/icons/img5.svg";
import { ReactComponent as LineThree } from "../../../assets/icons/line3.svg";
import { ReactComponent as BtnThree } from "../../../assets/icons/btn3.svg";

import { Link } from "react-router-dom";

import "./HomeSectionFour.scss";

function HomeSectionFour() {
  return (
    <div className="home-fourWrapper">
      <div className="home-four">
        <h3 className="home-four--infoOne">
          EQUIP <br /> CAREGIVERS
        </h3>
        <h1 className="home-four--title">
          USING TOOLS TO MAKE <br />
          CARING EASIER
        </h1>
        <div className="home-four--images">
          <div className="home-four--images__left">
            <ImageFive />
          </div>
          <div className="home-four--images__right">
            <div className="disapper">
              <LineThree />
            </div>
            <ImageFour />
          </div>
        </div>
        <h3 className="home-four--infoTwo">WE APPLY</h3>
        <div className="home-four--btnWrapper">
          <Link to="/learn" className="home-four--btn">
            <BtnThree />
          </Link>
          <p className="home-four--descOne">
            SCIENCE AND TECHNOLOGY TO SUPPORT CAREGIVERS TO EXPAND THE HORIZONS
            OF CHILDHOOD EXPERIENCES..
          </p>
        </div>
        <p className="home-four--descTwo">
          We provide practical solutions that help caregivers to navigate the
          complexities that arise from everyday challenges of raising children..
        </p>
      </div>
    </div>
  );
}

export default HomeSectionFour;
