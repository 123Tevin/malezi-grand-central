import FocusSectionOne from "../../components/Focus/FocusSectionOne/FocusSectionOne";
import FocusSectionThree from "../../components/Focus/FocusSectionThree/FocusSectionThree";
import FocusSectionTwo from "../../components/Focus/FocusSectionTwo/FocusSectionTwo";
import Footer from "../../components/Home/Footer/Footer";
import HomeSectionFive from "../../components/Home/HomeSectionFive/HomeSectionFive";
import Nav from "../../components/Home/Nav/Nav";

function FocusPage() {
  return (
    <div className="focus-page">
      <Nav />
      <FocusSectionOne />
      <FocusSectionTwo />
      <FocusSectionThree />
      <HomeSectionFive />
      <Footer />
    </div>
  );
}

export default FocusPage;
