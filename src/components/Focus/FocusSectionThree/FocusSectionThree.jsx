import "./FocusSectionThree.scss";
import { ReactComponent as RecIcon } from "../../../assets/images/rec.svg";

function FocusSectionThree() {
  return (
    <div className="focus-three">
      <div className="focus-three__top">
        <div className="focus-three__top--left">
          <RecIcon />
        </div>
        <h1 className="focus-three__title">
          THROUGH OUR EXTENSIVE INDUSTRY EXPERIENCE, WE PROVIDE A SUITE OF
          SOLUTIONS THAT FEATURE
        </h1>
      </div>

      <div className="focus-three__information">
        <h3 className="focus-three__information--info">
          Elearning Content Development And Adaptation:
        </h3>
        <p className="focus-three__information--desc">
          We create rich interactive elearning content designed for 21st Century
          skills. This content is delivered through both web and mobile
          platforms.
        </p>
      </div>

      <div className="focus-three__information">
        <h3 className="focus-three__information--info">
          Elearning Platforms And Games:
        </h3>
        <p className="focus-three__information--desc">
          We enable rich learning experiences through educational games and
          online learning platforms. Games such as chemsha bongo enable learners
          to enjoy single or multiplayer challenges based on past examination
          content.
        </p>
      </div>
      <div className="focus-three__information">
        <h3 className="focus-three__information--info">
          Entrepreneurship Development Platforms:
        </h3>
        <p className="focus-three__information--desc">
          We develop platforms that make entrepreneurs connect with
          opportunities. These include Malezi Tutor.
        </p>
      </div>
      <div className="focus-three__information">
        <h3 className="focus-three__information--info">Storytelling:</h3>
        <p className="focus-three__information--desc">
          We have a passion for sharing modern stories from Africa through
          multiple forms of media including books, videos, animations and
          augmented reality.
        </p>
      </div>
      <div className="focus-three__information">
        <h3 className="focus-three__information--info">Edtech Consulting:</h3>
        <p className="focus-three__information--desc">
          We work with governments and large enterprises to develop elearning
          strategies and implementation plans focused on generating impact.
        </p>
      </div>
    </div>
  );
}

export default FocusSectionThree;
