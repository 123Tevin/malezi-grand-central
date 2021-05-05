import Contact from "../../components/Home/ContactSection/Contact";
import Footer from "../../components/Home/Footer/Footer";
import HomeSectionFive from "../../components/Home/HomeSectionFive/HomeSectionFive";
import HomeSectionFour from "../../components/Home/HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "../../components/Home/HomeSectionOne/HomeSectionOne";
// import HomeSectionSix from "../../components/Home/HomeSectionSix/HomeSectionSix";
import HomeSectionThree from "../../components/Home/HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "../../components/Home/HomeSectionTwo/HomeSectionTwo";
import Nav from "../../components/Home/Nav/Nav";
import Socials from "../../components/Shared/Socials/Socials";

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
      <Socials 
      twitter="https://twitter.com/Malezike"
      fb="https://www.facebook.com/malezico "
      instagram="https://www.instagram.com/malezikenya/"
      linkedin=""
      youtube=""
      />
      <Contact />
    </div>
  );
}

export default HomePage;
