import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import image from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image3.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function BongoPage() {
  const descs = [
    "Chemsha Bongo enables you to test your knowledge based on a set of questions taken from 8th Grade Primary school leaving exams from the Kenya Certificate of Primary Education (KCPE). The questions in the quiz are randomly selected from our database of over 10,000 questions in Mathematics, English Language, Swahili Language, Science and Social Studies.",
    "Once the Android application is installed on a device, playing is as simple as creating a tournament, inviting friends and having fun.",
  ];
  return (
    <div className="bongo-page">
      <Nav />
      <SolutionOne info="Chemsha Bongo" image={image} bgImage={bgImage} />
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
