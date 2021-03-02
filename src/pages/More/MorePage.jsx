import Footer from "../../components/Home/Footer/Footer";
import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import image from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image3.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function MorePage() {
  const descs = [
    "The MORE Africa series aspires to inspire. To inspire and give pride to African Children by giving them a story modeled around their lives, surroundings and experiences therefore contributing to a strengthening of African identity and love for books necessary for a strong foundation to success in life.",
    "The early reader series comes with an augmented reality powered companion app that takes static images off a page and brings them to life, immersing learners in the magical African stories. New media experiences will create greater motivation and interest in learning by helping children to learn in more playful and creative ways, thus promoting problem solving and exploration.",
  ];
  return (
    <div className="more-page">
      <Nav />
      <SolutionOne info="More Africa Series" image={image} bgImage={bgImage} />
      <SolutionTwo title="MORE Africa Series" descs={descs} />
      <Solutions />
    </div>
  );
}

export default MorePage;
