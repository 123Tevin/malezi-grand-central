import Footer from "../../components/Home/Footer/Footer";
import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import image from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image3.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function LearnPage() {
  const descs = [
    "Learn At Home is an initiative that brings together the Mastercard Foundation, E-Malezi and Data Science Nigeria under the Mastercard Foundation COVID-19 Recovery and Resilience Program.",
    "As partners, we stand together in our commitment to assist young people, in Nigeria, whose education was disrupted by the COVID-19 pandemic. We work with learners and educators to help them transition to online and offline digital channels for learning content delivery, student outreach and mentoring.",
  ];
  return (
    <div className="learn-page">
      <Nav />
      <SolutionOne
        info="Learn At Home Nigeria"
        image={image}
        bgImage={bgImage}
      />
      <SolutionTwo
        title="Learn At Home Nigeria"
        descs={descs}
        link="https://learnathome.ng/"
      />
      <Solutions />
    </div>
  );
}

export default LearnPage;
