import "./PackSectionTwo.scss";
import { ReactComponent as RecIcon } from "../../../assets/images/rec.svg";

function PackSectionTwo() {
  return (
    <div className="pack-two">
      <div className="pack-two__top">
        <div className="pack-two__top--left">
          <RecIcon />
        </div>
        <h1 className="pack-two__title">MsingiPACK</h1>
      </div>

      <div className="pack-two__information">
        <p className="pack-two__information--desc">
          MsingiPACK delivers a rich, multi sensory learning experience for your
          child. The content transforms the way a child learns and promotes
          interactivity and participation while studying.
        </p>
        <p className="pack-two__information--desc">
          The platform is well researched and designed in collaboration with
          teachers and parents to be intuitive, easy to use. MsingiPACK makes
          learning fun, a perfect student companion for learning both at school
          and at home.
        </p>
      </div>
    </div>
  );
}

export default PackSectionTwo;
