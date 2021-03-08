import Contact from "../../components/Home/ContactSection/Contact";
import Footer from "../../components/Home/Footer/Footer";
import HomeSectionFive from "../../components/Home/HomeSectionFive/HomeSectionFive";
import HomeSectionFour from "../../components/Home/HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "../../components/Home/HomeSectionOne/HomeSectionOne";
// import HomeSectionSix from "../../components/Home/HomeSectionSix/HomeSectionSix";
import HomeSectionThree from "../../components/Home/HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "../../components/Home/HomeSectionTwo/HomeSectionTwo";
import Nav from "../../components/Home/Nav/Nav";

function HomePage() {
  return (
    <div className="home-page">
      <Nav />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      {/* <HomeSectionSix /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
