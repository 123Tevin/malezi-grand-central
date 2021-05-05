import Nav from "../../components/Home/Nav/Nav";
import Solutions from "../../components/Shared/Solutions/Solutions";
import SolutionOne from "../../components/Shared/SolutionOne/SolutionOne";

import SolutionTwo from "../../components/Shared/SolutionTwo/SolutionTwo";
import Socials from "../../components/Shared/Socials/Socials";

function PackPage() {
  const descs = [
    " MsingiPACK delivers a rich, multi sensory learning experience for your child. The content transforms the way a child learns and promotes interactivity and participation while studying.",
    "The platform is well researched and designed in collaboration with teachers and parents to be intuitive, easy to use. MsingiPACK makes learning fun, a perfect student companion for learning both at school and at home.",
  ];
  return (
    <div className="pack-page">
      <Nav />
      <SolutionOne
        info="MsingiPACK"
        image="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Msingi%20Perk%20Official%20Logo.svg?alt=media&token=71e9e562-0923-45a7-af2a-9f1a67b19be3"
        bgImage="https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(13).jpg?alt=media&token=b163e328-1308-4b54-b7c5-34756d8029f9"
      />
      <SolutionTwo
        title="MsingiPACK"
        descs={descs}
        link="https://academy.msingipack.com/"
      />
      <Socials
        twitter="https://twitter.com/MsingiPACK"
        fb="https://www.facebook.com/MsingiPACK"
        instagram="https://www.instagram.com/msingipack_ke/"
        linkedin="https://www.linkedin.com/in/msingipack-elearning/"
        youtube="https://www.youtube.com/channel/UCPPPbsIbM300R2C3dQiTl9w"
      />
      <Solutions />
    </div>
  );
}

export default PackPage;
