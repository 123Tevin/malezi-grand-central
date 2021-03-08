import { ReactComponent as LineTwo } from "../../../assets/images/line2.svg";

import "./HomeSectionThree.scss";

function HomeSectionThree() {
  return (
    <div className="home-three__back-circleWrapper">
      <div className="home-three__back-circle"></div>
      <div className="home-threeWrapper">
        <div className="home-three">
          <h4 className="home-three--infoOne">
            We Equip Young <br /> Minds To
          </h4>
          <h1 className="home-three--title">
            INVENT THE <br />
            FUTURE
          </h1>
          <div className="home-three--images">
            <div className="home-three--images__left">
              <div className="disapper">
                <LineTwo />
              </div>
              <div className="interchange__three">
                <div className="interchange__three--large">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(3).png?alt=media&token=f15d79cc-d007-43aa-876e-8aeb8e0548e8"
                    alt="Child Lying"
                  />
                </div>
              </div>
            </div>
            <div className="home-three--images__right">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(8).png?alt=media&token=14148dd4-9509-41d6-9f6f-871a5373bb5b"
                alt="Tutor Standing"
              />
            </div>
          </div>
          <h3 className="home-three--infoTwo">WE BELIEVE</h3>
          <div className="home-three--btnWrapper">
            <p className="home-three--descOne">
              BY GIVING LEARNERS AND EDUCATORS THE RIGHT TOOLS TO ENABLE RICHER,
              MORE ROUNDED LEARNING, WE ARE PREPARING CHILDREN FOR PROFESSIONS
              THAT ARE YET TO BE INVENTED.
            </p>
          </div>
          <p className="home-three--descTwo">
            We work throughout Africa providing education solutions for
            governments, enterprise, schools and homes with the mission of
            ensuring learning never stops.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionThree;
