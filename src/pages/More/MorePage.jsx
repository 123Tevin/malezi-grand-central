import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function MorePage() {
  const descs = [
    "The MORE Africa series aspires to inspire. To inspire and give pride to African Children by giving them a story modeled around their lives, surroundings and experiences therefore contributing to a strengthening of African identity and love for books necessary for a strong foundation to success in life.",
    "The early reader series comes with an augmented reality powered companion app that takes static images off a page and brings them to life, immersing learners in the magical African stories. New media experiences will create greater motivation and interest in learning by helping children to learn in more playful and creative ways, thus promoting problem solving and exploration.",
  ];
  return (
    <div className="more">
      <Nav />
      <SolutionOne
        info="More Africa Series"
        image="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/More%20Africa%20Official%20Logo.svg?alt=media&token=ad870cf4-196b-4e7c-a5d2-1d96ff20d4a8"
        bgImage="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(11).png?alt=media&token=08c83fb2-830c-4032-9312-793f38575549"
      />
      <SolutionTwo title="MORE Africa Series" descs={descs} />
      <Solutions />
    </div>
  );
}

export default MorePage;
