import "./SolutionTwo.scss";
import { ReactComponent as RecIcon } from "../../../assets/images/rec.svg";

function SolutionTwo({ title, descs, link }) {
  return (
    <div
      className="solution-two"
      style={{ marginTop: title === "Chemsha Bongo" ? "0rem" : "" }}
    >
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
      {link && (
        <a href={link} class="r-link link text-underlined" target="_blank">
          {`Visit ${title}`}
        </a>
      )}
    </div>
  );
}

export default SolutionTwo;
