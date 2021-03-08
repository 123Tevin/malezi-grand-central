import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";
import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function BongoPage() {
  const descs = [
    "Chemsha Bongo enables you to test your knowledge based on a set of questions taken from 8th Grade Primary school leaving exams from the Kenya Certificate of Primary Education (KCPE). The questions in the quiz are randomly selected from our database of over 10,000 questions in Mathematics, English Language, Swahili Language, Science and Social Studies.",
    "Once the Android application is installed on a device, playing is as simple as creating a tournament, inviting friends and having fun.",
  ];
  return (
    <div className="bongo-page">
      <Nav />
      <SolutionOne
        info="Chemsha Bongo"
        image="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Chamsha%20Bongo%20Official%20Logo.svg?alt=media&token=32440392-2e1b-4d9d-adbf-7ffa6082b16b"
        bgImage="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(20).jpg?alt=media&token=3903da57-b7f0-4029-8053-b40720e0ab93"
      />
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
