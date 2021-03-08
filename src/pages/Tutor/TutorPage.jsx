import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function TutorPage() {
  const descs = [
    "Malezi Tutor is designed to facilitate better learning outcomes for students by giving parents or guardians the power to find, compare, connect with and engage tutors for those under their care. Helping parents become more involved in the process is a key factor to giving students a better chance at success and ensuring their safety.",
    "Malezi Tutor provides qualified teachers with the chance to make additional income or get gainful employment by teaching what they know. By leveraging the increasingly available digital infrastructure, digital platforms, new business models and new skills or reskilling of teachers, it is possible to create new jobs and opportunities.",
  ];
  return (
    <div className="tutor-page">
      <Nav />
      <SolutionOne
        info="Malezi Tutor"
        image="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Tutor%20Official%20Logo.svg?alt=media&token=65d2c88d-2764-4545-934c-7100b3298861"
        bgImage="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(9).jpg?alt=media&token=75f7d724-d1f1-493a-860e-72b4fae2346a"
      />
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
