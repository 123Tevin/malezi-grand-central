import FocusSectionOne from "../../components/Focus/FocusSectionOne/FocusSectionOne";
import FocusSectionTwo from "../../components/Focus/FocusSectionTwo/FocusSectionTwo";
import FocusSectionThree from "../../components/Focus/FocusSectionThree/FocusSectionThree";
import Footer from "../../components/Home/Footer/Footer";
import Nav from "../../components/Home/Nav/Nav";
import Solutions from "../../components/Shared/Solutions/Solutions";

function FocusPage() {
  return (
    <div className="focus-page">
      <Nav />
      <FocusSectionOne />
      <FocusSectionTwo />
      <FocusSectionThree />
      <Solutions />
    </div>
  );
}

export default FocusPage;
