import PackSectionOne from "../../components/Pack/PackSectionOne/PackSectionOne";
import HomeSectionFive from "../../components/Home/HomeSectionFive/HomeSectionFive";
import Nav from "../../components/Home/Nav/Nav";
import Footer from "../../components/Home/Footer/Footer";
import PackSectionTwo from "../../components/Pack/PackSectionTwo/PackSectionTwo";
// import PackSectionThree from "../../components/Pack/PackSectionThree/PackSectionThree";

function PackPage() {
  return (
    <div className="pack-page">
      <Nav />
      <PackSectionOne />
      <PackSectionTwo />
      <HomeSectionFive />
      {/* <PackSectionThree /> */}
      <Footer />
    </div>
  );
}

export default PackPage;
