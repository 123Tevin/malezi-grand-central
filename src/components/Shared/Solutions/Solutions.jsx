import { Link } from "react-router-dom";
import { useState } from "react";
import "./Solutions.scss";

import { ReactComponent as ArrowOne } from "../../../assets/images/arrow1.svg";
import { ReactComponent as ArrowTwo } from "../../../assets/images/arrow2.svg";
import { ReactComponent as ArrowThree } from "../../../assets/images/arrow3.svg";

function Solutions() {
  const solutionData = [
    {
      link: "/pack",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(13).jpg?alt=media&token=b163e328-1308-4b54-b7c5-34756d8029f9",
      title: "MsingiPack",
    },
    {
      link: "/learn",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(5).jpg?alt=media&token=6ff64814-e2dd-43d6-be48-93946699da2d",
      title: "Learn At Home Nigeria",
    },
    {
      link: "/more",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(11).png?alt=media&token=08c83fb2-830c-4032-9312-793f38575549",
      title: "More Africa Series",
    },
    {
      link: "/bongo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(20).jpg?alt=media&token=3903da57-b7f0-4029-8053-b40720e0ab93",
      title: "Chemsha Bongo",
    },
    {
      link: "/enterprise",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(1).jpeg?alt=media&token=d75be5c9-daf0-4a23-b6ab-e22080274914",
      title: "Malezi EnterPrise",
    },
    {
      link: "/tutor",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(9).jpg?alt=media&token=75f7d724-d1f1-493a-860e-72b4fae2346a",
      title: "Malezi Tutor",
    },
  ];

  const [start, setStart] = useState(0);
  const last = start + 3;
  const currentData = solutionData?.slice(start, last);

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
      <p className="dfoot">© 2021 Malezi. All Rights Reserved</p>
    </div>
  );
}

export default Solutions;
