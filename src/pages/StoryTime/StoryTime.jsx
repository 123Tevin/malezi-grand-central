import Nav from "../../components/Home/Nav/Nav";
import Solutions from "../../components/Shared/Solutions/Solutions";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

import playstoreImg from "../../assets/images/playstore.png";
import frontImg from "../../assets/images/back.png";

import "./BongoPage.scss";

import chemshaBongo from "../../assets/images/logo.png";

function BongoPage() {
  const descs = [
    "Chemsha Bongo enables you to test your knowledge based on a set of questions taken from 8th Grade Primary school leaving exams from the Kenya Certificate of Primary Education (KCPE). The questions in the quiz are randomly selected from our database of over 10,000 questions in Mathematics, English Language, Swahili Language, Science and Social Studies.",
    "Once the Android application is installed on a device, playing is as simple as creating a tournament, inviting friends and having fun.",
  ];
  return (
    <div className="bongo">
      <Nav />
      <div className="bongo-page">
        <div className="bongo-page__left">
          <p className="bongo-page__left--title">
            The No.1 Education <br /> app in Kenya
          </p>
          <p className="bongo-page__left--desc">
           Test your knowledge with Class 8 Kenya Certificate of Primary Education (KCPE) exam questions in this exciting game.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=ke.co.malezi.chemshabongo&hl=en&gl=US"
            target="_blank"
          >
            <img src={playstoreImg} alt="Google Play Store Image" />
          </a>
        </div>
        <div className="bongo-page__right">
          <img
            src={frontImg}
            alt="Left Front Image"
            className="bongo-page__right--imageOne"
          />
          <a
            href="https://play.google.com/store/apps/details?id=ke.co.malezi.chemshabongo&hl=en&gl=US"
            target="_blank"
          >
            <img
              src={chemshaBongo}
              alt="Left Front Image"
              className="bongo-page__right--imageTwo"
            />
          </a>
        </div>
      </div>
      <SolutionTwo
        title="Chemsha Bongo"
        descs={descs}
        link="https://play.google.com/store/apps/details?id=ke.co.malezi.chemshabongo&hl=en&gl=US"
      />
      <Solutions />
    </div>
  );
}

export default BongoPage;
