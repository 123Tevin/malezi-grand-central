import { Link } from "react-router-dom";

import "./HomeSectionFive.scss";

import cardOne from "../../../assets/icons/image4.jpg";
import cardTwo from "../../../assets/icons/image5.jpg";
import cardThree from "../../../assets/icons/image6.jpg";
import cardFour from "../../../assets/icons/image7.jpg";
import cardFive from "../../../assets/icons/image8.jpg";
import cardSix from "../../../assets/icons/image9.png";

function HomeSectionFive() {
  return (
    <div className="home-five">
      <h3 className="home-five__title">OUR SOLUTIONS</h3>
      <p className="home-five__desc">
        We complement and extend the current education system which expects
        children to physically go to a school with the ability to bring the
        school to wherever children may be. By so doing, we reach both those
        children in school and those out of school to give them learning
        opportunities at any time and wherever they may be.{" "}
      </p>
      <div className="home-five__card-wrapper">
        <Link to="/pack" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardOne} alt="card one" />
            <p>MsingiPACK</p>
          </div>
          <p className="home-five__overlay">MsingiPACK</p>
        </Link>
        <Link to="/learn" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardTwo} alt="card one" />
            <p>Learn At Home Nigeria</p>
          </div>
          <p className="home-five__overlay">Learn At Home Nigeria</p>
        </Link>
        <Link to="/tutor" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardThree} alt="card one" />
            <p>Malezi Tutor</p>
          </div>
          <p className="home-five__overlay">Malezi Tutor</p>
        </Link>
      </div>
      <div className="home-five__card-wrapper">
        <Link to="/more" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardFour} alt="card one" />
            <p>MORE Africa Series</p>
          </div>
          <p className="home-five__overlay">MORE Africa Series</p>
        </Link>
        <Link to="/bongo" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardFive} alt="card one" />
            <p>Chemsha Bongo</p>
          </div>
          <p className="home-five__overlay">Chemsha Bongo</p>
        </Link>
        <Link to="/enterprise" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img src={cardTwo} alt="card one" />
            <p>Malezi Enterprise</p>
          </div>
          <p className="home-five__overlay">Malezi Enterprise</p>
        </Link>
      </div>
    </div>
  );
}

export default HomeSectionFive;
