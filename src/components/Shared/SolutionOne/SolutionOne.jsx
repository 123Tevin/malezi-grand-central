import "./SolutionOne.scss";

function SolutionOne({ bgImage, image, info }) {
  return (
    <div
      className="solution-one"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="solution-one__img">
        <div className="solution-one__card">
          <img src={image} alt="card one" />
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default SolutionOne;
