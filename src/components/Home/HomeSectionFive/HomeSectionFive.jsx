import { Link } from "react-router-dom";

import "./HomeSectionFive.scss";

import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";

function HomeSectionFive() {
  return (
    <div className="home-five">
      <h1 className="home-five__title">OUR SOLUTIONS</h1>

      <div className="home-five__line">
        <div className="lineIcon">
          <LineSixIcon />
          <Triange />
          <LineSixIcon />
        </div>
      </div>
      <p className="home-five__desc">
        We complement and extend the current education system which expects
        children to physically go to a school with the ability to bring the
        school to wherever children may be. By so doing, we reach both those
        children in school and those out of school to give them learning
        opportunities at any time and wherever they may be.
      </p>
      <div className="home-five__card-wrapper">
        <Link to="/pack" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(13).jpg?alt=media&token=b163e328-1308-4b54-b7c5-34756d8029f9"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">MsingiPACK</p>
        </Link>
        <Link to="/learn" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(5).jpg?alt=media&token=6ff64814-e2dd-43d6-be48-93946699da2d"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">Learn At Home Nigeria</p>
        </Link>
        <Link to="/tutor" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(9).jpg?alt=media&token=75f7d724-d1f1-493a-860e-72b4fae2346a"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">Malezi Tutor</p>
        </Link>

        <Link to="/more" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(11).png?alt=media&token=08c83fb2-830c-4032-9312-793f38575549"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">MORE Africa Series</p>
        </Link>
        <Link to="/bongo" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(20).jpg?alt=media&token=3903da57-b7f0-4029-8053-b40720e0ab93"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">Chemsha Bongo</p>
        </Link>
        <Link to="/enterprise" className="home-five__overlay--wrapper">
          <div className="home-five__card">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(1).jpeg?alt=media&token=d75be5c9-daf0-4a23-b6ab-e22080274914"
              alt="card one"
            />
          </div>
          <p className="home-five__overlay">Malezi Enterprise</p>
        </Link>
      </div>
    </div>
  );
}

export default HomeSectionFive;
