import "./SolutionTwo.scss";
import { ReactComponent as RecIcon } from "../../../assets/images/rec.svg";

function SolutionTwo({ title, descs }) {
  return (
    <div className="solution-two">
      <div className="solution-two__top">
        <div className="solution-two__top--left">
          <RecIcon />
        </div>
        <h1 className="solution-two__title">{title}</h1>
      </div>

      <div className="solution-two__information">
        {descs.map((desc, i) => (
          <p className="solution-two__information--desc" key={i}>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SolutionTwo;
