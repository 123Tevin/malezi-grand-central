import "./PackSectionThree.scss";

import cardOne from "../../../assets/icons/card1.svg";
import cardTwo from "../../../assets/icons/card2.svg";
import cardThree from "../../../assets/icons/card3.svg";
import cardFour from "../../../assets/icons/card4.svg";
import cardFive from "../../../assets/icons/card5.svg";
import cardSix from "../../../assets/icons/card6.svg";

import { ReactComponent as ArrowOne } from "../../../assets/images/arrow1.svg";
import { ReactComponent as ArrowTwo } from "../../../assets/images/arrow2.svg";
import { ReactComponent as ArrowThree } from "../../../assets/images/arrow3.svg";

function PackSectionThree() {
  return (
    <div className="pack-three">
      <h3 className="pack-three__title">MORE SOLUTIONS</h3>
      <div className="pack-three__down">
        <ArrowTwo />
      </div>
      <div className="pack-three__card-wrapper">
        <div className="pack-three__left">
          <ArrowOne />
        </div>
        <img src={cardOne} alt="" />
        <img src={cardTwo} alt="" />
        <img src={cardThree} alt="" />
        <div className="pack-three__left">
          <ArrowThree />
        </div>
      </div>
    </div>
  );
}

export default PackSectionThree;
