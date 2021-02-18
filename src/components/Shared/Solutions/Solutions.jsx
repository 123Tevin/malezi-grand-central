import { Link } from "react-router-dom";
import { useState } from "react";
import "./Solutions.scss";

import cardOne from "../../../assets/icons/image4.jpg";
import cardTwo from "../../../assets/icons/image5.jpg";
import cardThree from "../../../assets/icons/image6.jpg";

import { ReactComponent as ArrowOne } from "../../../assets/images/arrow1.svg";
import { ReactComponent as ArrowTwo } from "../../../assets/images/arrow2.svg";
import { ReactComponent as ArrowThree } from "../../../assets/images/arrow3.svg";

function Solutions() {
  const solutionData = [
    { link: "/pack", image: cardOne, title: "MsingiPack" },
    { link: "/learn", image: cardTwo, title: "Learn At Home Nigeria" },
    { link: "/more", image: cardThree, title: "More Africa Series" },
    { link: "/bongo", image: cardOne, title: "Chemsha Bongo" },
    { link: "/enterprise", image: cardTwo, title: "Malezi EnterPrise" },
    { link: "/tutor", image: cardThree, title: "Malezi Tutor" },
  ];

  const [start, setStart] = useState(0);
  const last = start + 3;
  const currentData = solutionData?.slice(start, last);

  console.log(start);
  const previousPage = () => setStart(start - 1);
  const nextPage = () => setStart(start + 1);

  return (
    <div className="solution__back-circleWrapper">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="solution__back-circle"></div>
      </div>
      <div className="solution">
        <h3 className="solution__title">MORE SOLUTIONS</h3>
        <div className="solution__down">
          <ArrowTwo />
        </div>
        <div className="solution__card-wrapper">
          {start > 0 && (
            <div className="solution__left" onClick={previousPage}>
              <ArrowOne />
            </div>
          )}
          <div className="solution__card-wrapper">
            {currentData.map((data, i) => (
              <Link
                to={data.link}
                className="solution__overlay--wrapper"
                key={i}
              >
                <div className="solution__card">
                  <img src={data.image} alt="card one" />
                  <p>{data.title}</p>
                </div>
                <p className="solution__overlay">{data.title}</p>
              </Link>
            ))}
          </div>
          {last < 6 && (
            <div className="solution__left" onClick={nextPage}>
              <ArrowThree />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
