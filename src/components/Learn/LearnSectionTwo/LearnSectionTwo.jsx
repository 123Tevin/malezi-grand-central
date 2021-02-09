import "./LearnSectionTwo.scss";
import { ReactComponent as RecIcon } from "../../../assets/images/rec.svg";

function LearnSectionTwo() {
  return (
    <div className="learn-two">
      <div className="learn-two__top">
        <div className="learn-two__top--left">
          <RecIcon />
        </div>
        <h1 className="learn-two__title">Learn At Home Nigeria </h1>
      </div>

      <div className="learn-two__information">
        <p className="learn-two__information--desc">
          Learn At Home is an initiative that brings together the Mastercard
          Foundation, E-Malezi and Data Science Nigeria under the Mastercard
          Foundation COVID-19 Recovery and Resilience Program. As partners, we
          stand together in our commitment to assist young people, in Nigeria,
          whose education was disrupted by the COVID-19 pandemic. We work with
          learners and educators to help them transition to online and offline
          digital channels for learning content delivery, student outreach and
          mentoring..
        </p>
      </div>
    </div>
  );
}

export default LearnSectionTwo;
