import "./LearnSectionOne.scss";

import cardThree from "../../../assets/icons/image6.jpg";

function LearnSectionOne() {
  return (
    <div className="learn-one">
      <div className="learn-one__img">
        <div className="learn-one__card">
          <img src={cardThree} alt="card one" />
          <p>Malezi Tutor</p>
        </div>
      </div>
    </div>
  );
}

export default LearnSectionOne;
