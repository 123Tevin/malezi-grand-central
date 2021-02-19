import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import image from "../../assets/icons/image6.jpg";
import bgImage from "../../assets/images/image3.svg";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function TutorPage() {
  const descs = [
    "Malezi Tutor is designed to facilitate better learning outcomes for students by giving parents or guardians the power to find, compare, connect with and engage tutors for those under their care. Helping parents become more involved in the process is a key factor to giving students a better chance at success and ensuring their safety.",
    "Malezi Tutor provides qualified teachers with the chance to make additional income or get gainful employment by teaching what they know. By leveraging the increasingly available digital infrastructure, digital platforms, new business models and new skills or reskilling of teachers, it is possible to create new jobs and opportunities.",
  ];
  return (
    <div className="tutor-page">
      <Nav />
      <SolutionOne info="Malezi Tutor" image={image} bgImage={bgImage} />
      <SolutionTwo
        title="Malezi Tutor"
        descs={descs}
        link="https://tutor.malezi.co.ke/"
      />
      <Solutions />
    </div>
  );
}

export default TutorPage;
