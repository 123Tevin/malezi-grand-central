import "./HomeSectionFive.scss";

import cardOne from "../../../assets/icons/card1.svg";
import cardTwo from "../../../assets/icons/card2.svg";
import cardThree from "../../../assets/icons/card3.svg";
import cardFour from "../../../assets/icons/card4.svg";
import cardFive from "../../../assets/icons/card5.svg";
import cardSix from "../../../assets/icons/card6.svg";

function HomeSectionFive() {
  return (
    <div className="home-five">
      <h3 className="home-five__title">Our Solutions</h3>
      <p className="home-five__desc">
        We complement and extend the current education system which expects
        children to physically go to a school with the ability to bring the
        school to wherever children may be. By so doing, we reach both those
        children in school and those out of school to give them learning
        opportunities at any time and wherever they may be.{" "}
      </p>
      <div className="home-five__card-wrapper">
        <img src={cardOne} alt="" />
        <img src={cardTwo} alt="" />
        <img src={cardThree} alt="" />
      </div>
      <div className="home-five__card-wrapper">
        <img src={cardFour} alt="" />
        <img src={cardFive} alt="" />
        <img src={cardSix} alt="" />
      </div>
    </div>
  );
}

export default HomeSectionFive;
