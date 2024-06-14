import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./Solutions.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Solutions() {
  const solutionData = [
    {
      link: "/learn",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(5).jpg?alt=media&token=6ff64814-e2dd-43d6-be48-93946699da2d",
      title: "Learn At Home Nigeria",
    },
    {
      link: "/more",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(11).png?alt=media&token=08c83fb2-830c-4032-9312-793f38575549",
      title: "More Africa Series",
    },
    {
      link: "/bongo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(20).jpg?alt=media&token=3903da57-b7f0-4029-8053-b40720e0ab93",
      title: "Chemsha Bongo",
    },
    {
      link: "/enterprise",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(1).jpeg?alt=media&token=d75be5c9-daf0-4a23-b6ab-e22080274914",
      title: "Malezi EnterPrise",
    },
    {
      link: "/tutor",
      image:
        "https://firebasestorage.googleapis.com/v0/b/malezi-grand-central.appspot.com/o/Malezi%20Website%20Image%20-%20%20(9).jpg?alt=media&token=75f7d724-d1f1-493a-860e-72b4fae2346a",
      title: "Malezi Tutor",
    },
  ];

  return (
    <div className="solution__back-circleWrapper">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="solution__back-circle"></div>
      </div>
      {/* <div className="solution"> */}
      <h3 className="solution__title">MORE SOLUTIONS</h3>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={isMobile ? true : false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        // customTransition="all 3"
        // transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="solution__card-wrapper">
          <Link
            to={solutionData[0].link}
            className="solution__overlay--wrapper"
          >
            <div className="solution__card">
              <img src={solutionData[0].image} alt="card one" />
            </div>
            <p className="solution__overlay">{solutionData[0].title}</p>
          </Link>
        </div>
        <div className="solution__card-wrapper">
          <Link
            to={solutionData[1].link}
            className="solution__overlay--wrapper"
          >
            <div className="solution__card">
              <img src={solutionData[1].image} alt="card one" />
            </div>
            <p className="solution__overlay">{solutionData[1].title}</p>
          </Link>
        </div>
        <div className="solution__card-wrapper">
          <Link
            to={solutionData[2].link}
            className="solution__overlay--wrapper"
          >
            <div className="solution__card">
              <img src={solutionData[2].image} alt="card one" />
            </div>
            <p className="solution__overlay">{solutionData[2].title}</p>
          </Link>
        </div>
        <div className="solution__card-wrapper">
          <Link
            to={solutionData[3].link}
            className="solution__overlay--wrapper"
          >
            <div className="solution__card">
              <img src={solutionData[3].image} alt="card one" />
            </div>
            <p className="solution__overlay">{solutionData[3].title}</p>
          </Link>
        </div>
        <div className="solution__card-wrapper">
          <Link
            to={solutionData[4].link}
            className="solution__overlay--wrapper"
          >
            <div className="solution__card">
              <img src={solutionData[4].image} alt="card one" />
            </div>
            <p className="solution__overlay">{solutionData[4].title}</p>
          </Link>
        </div>
        {/*<div className="solution__card-wrapper">*/}
        {/*  <Link*/}
        {/*    to={solutionData[5].link}*/}
        {/*    className="solution__overlay--wrapper"*/}
        {/*  >*/}
        {/*    <div className="solution__card">*/}
        {/*      <img src={solutionData[5].image} alt="card one" />*/}
        {/*    </div>*/}
        {/*    <p className="solution__overlay">{solutionData[5].title}</p>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </Carousel>
      <p className="dfoot" style={{ marginTop: "2rem" }}>
        © 2021 Malezi. All Rights Reserved
      </p>
    </div>
  );
}

export default Solutions;
