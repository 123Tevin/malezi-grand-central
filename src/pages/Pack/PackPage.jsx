import Nav from "../../components/Home/Nav/Nav";
import Solutions from "../../components/Shared/Solutions/Solutions";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";

// images
import cardThree from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image2.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function PackPage() {
  const descs = [
    " MsingiPACK delivers a rich, multi sensory learning experience for your child. The content transforms the way a child learns and promotes interactivity and participation while studying.",
    "The platform is well researched and designed in collaboration with teachers and parents to be intuitive, easy to use. MsingiPACK makes learning fun, a perfect student companion for learning both at school and at home.",
  ];
  return (
    <div className="pack-page">
      <Nav />
      <SolutionOne info="MsingiPACK" image={cardThree} bgImage={bgImage} />
      <SolutionTwo
        title="MsingiPACK"
        descs={descs}
        link="https://academy.msingipack.com/"
      />
      <Solutions />
    </div>
  );
}

export default PackPage;
