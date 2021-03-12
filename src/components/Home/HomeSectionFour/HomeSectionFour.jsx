import { ReactComponent as LineThree } from "../../../assets/icons/line3.svg";

import { Link } from "react-router-dom";

import "./HomeSectionFour.scss";

function HomeSectionFour() {
  return (
    <div className="home-four__back-circleWrapper">
      <div className="home-four__back-circle"></div>
      <div className="home-fourWrapper">
        <div className="home-four">
          <h3 className="home-four--infoOne">
            EQUIP <br /> CAREGIVERS
          </h3>
          <h4 className="home-four--title">
            Using Tools To Make <br /> Caring Easier
          </h4>
          <div className="home-four--images">
            <div className="home-four--images__left">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(9).png?alt=media&token=c7dc67a8-acf6-4a32-b302-342216cc1238"
                alt="Tutor Standing"
              />
            </div>
            <div className="home-four--images__right">
              <div className="disapper">
                <LineThree />
              </div>
              <div className="interchange__four">
                <div className="interchange__four--large">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(2).jpg?alt=media&token=b2ec1a8b-e5f7-4ac1-a877-62b7c0384f3e"
                    alt="Student Learning"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="home-four--infoTwo">WE APPLY</h3>
          <div className="home-four--btnWrapper">
            <Link to="/learn" className="home-four--btn">
              {/* <BtnThree /> */}
            </Link>
            <p className="home-four--descOne">
              SCIENCE AND TECHNOLOGY TO SUPPORT CAREGIVERS TO EXPAND THE
              HORIZONS OF CHILDHOOD EXPERIENCES..
            </p>
          </div>
          <p className="home-four--descTwo">
            We provide practical solutions that help caregivers to navigate the
            complexities that arise from everyday challenges of raising
            children..
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionFour;
