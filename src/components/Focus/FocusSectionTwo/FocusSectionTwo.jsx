import "./FocusSectionTwo.scss";

import { ReactComponent as ImageOne } from "../../../assets/images/img1.svg";

function FocusSectionTwo() {
  return (
    <div className="focus-two">
      <div className="focus-two__wrapper">
        <div className="focus-two__left">
          <ImageOne />
        </div>
        <div className="focus-two__right">
          <p>
            We work throughout Africa providing education solutions for
            governments, enterprise, schools and homes with the mission of
            ensuring learning never stops. We have specialized experience in
            edtech deployments to help learners overcome learning barriers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FocusSectionTwo;
