import "./PackSectionOne.scss";

import cardThree from "../../../assets/icons/image6.jpg";

function PackSectionOne() {
  return (
    <div className="pack-one">
      <div className="pack-one__img">
        <div className="pack-one__card">
          <img src={cardThree} alt="card one" />
          <p>Malezi Tutor</p>
        </div>
      </div>
    </div>
  );
}

export default PackSectionOne;
