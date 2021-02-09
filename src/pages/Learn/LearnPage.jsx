import Footer from "../../components/Home/Footer/Footer";
import HomeSectionFive from "../../components/Home/HomeSectionFive/HomeSectionFive";
import Nav from "../../components/Home/Nav/Nav";
import LearnSectionOne from "../../components/Learn/LearnSectionOne/LearnSectionOne";
import LearnSectionTwo from "../../components/Learn/LearnSectionTwo/LearnSectionTwo";
// import PackSectionThree from "../../components/Learn/PackSectionThree/PackSectionThree";

function LearnPage() {
  return (
    <div className="learn-page">
      <Nav />
      <LearnSectionOne />
      <LearnSectionTwo />
      <HomeSectionFive />
      {/* <PackSectionThree /> */}
      <Footer />
    </div>
  );
}

export default LearnPage;
