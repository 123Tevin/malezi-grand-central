import Footer from "../../components/Home/Footer/Footer";
import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import image from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image3.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function EnterprisePage() {
  const descs = [
    "We work with governments and large enterprises to develop and adapt content, platforms and strategies.",
  ];
  return (
    <div className="bongo-page">
      <Nav />
      <SolutionOne info="Malezi Enterprise" image={image} bgImage={bgImage} />
      <SolutionTwo title="Malezi Enterprise" descs={descs} />
      <Solutions />
      <Footer />
    </div>
  );
}

export default EnterprisePage;
