import Nav from "../../components/Home/Nav/Nav";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";
import Solutions from "../../components/Shared/Solutions/Solutions";

import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";

function EnterprisePage() {
  const descs = [
    "We work with governments and large enterprises to develop and adapt content, platforms and strategies for new forms of learning. We collaborate with partners who share in our conviction; Learning Should Never Stop!",
  ];
  return (
    <div className="enterprise">
      <Nav />
      <SolutionOne
        info="Malezi Enterprise"
        image="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(1).jpeg?alt=media&token=d75be5c9-daf0-4a23-b6ab-e22080274914"
        bgImage="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(1).jpeg?alt=media&token=d75be5c9-daf0-4a23-b6ab-e22080274914"
      />
      <SolutionTwo title="Malezi Enterprise" descs={descs} />
      <Solutions />
    </div>
  );
}

export default EnterprisePage;
