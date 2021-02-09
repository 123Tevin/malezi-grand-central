import "./HomeSectionSix.scss";

import { ReactComponent as QuoteIcon } from "../../../assets/icons/quote.svg";
import { ReactComponent as Line } from "../../../assets/icons/line4.svg";
import { ReactComponent as ShapeOne } from "../../../assets/icons/shape1.svg";
import { ReactComponent as ShapeTwo } from "../../../assets/icons/shape2.svg";
import { ReactComponent as ShapeThree } from "../../../assets/icons/shape3.svg";

import userOne from "../../../assets/icons/user1.png";
import userTwo from "../../../assets/icons/user2.png";
import userThree from "../../../assets/icons/user3.png";

function HomeSectionSix() {
  return (
    <div className="home-six">
      <h3 className="home-six__title">REVIEWS</h3>
      <p className="home-six__desc">
        In the interest of transparency, we never use incentives to influence
        these reviews; and because we follow strict privacy policies, we never
        link to a review unless it has been shared publicly by the reviewer.
      </p>
      <div className="home-six__quote-cardWrapper">
        <div className="home-six__quote-card">
          <div className="home-six__quote">
            <div className="home-six__quote--quoteIcon">
              <QuoteIcon />
            </div>
            <div className="home-six__quote--shapeIcon">
              <ShapeOne />
            </div>
            <h3 className="home-six__quote--title">PUBLIC INTERNATIONAL</h3>
            <div className="home-six__quote--line">
              <Line />
            </div>
          </div>
          <p className="home-six__info">
            In the interest of transparency, we never use incentives to
            influence these reviews; and because we follow strict privacy
            policies, we never link to a review unless it has bee IT investments
            and help them maintain a competitive edge. In the complex and
            rapidly changing world of of our partnership with Malezi
          </p>

          <div className="home-six__user">
            <img src={userOne} alt="" className="home-six__user--pic" />
            <h4 className="home-six__user--name">Marsha Kilua</h4>
            <p className="home-six__user--position">Marketing Lead</p>
            <h3 className="home-six__user--company">PUBLIC INTERNATIONAL</h3>
          </div>
        </div>

        <div className="home-six__quote-card">
          <div className="home-six__quote">
            <div className="home-six__quote--quoteIcon">
              <QuoteIcon />
            </div>
            <div className="home-six__quote--shapeIcon">
              <ShapeTwo />
            </div>
            <h3 className="home-six__quote--title">MADNESS HOUSING INC</h3>
            <div className="home-six__quote--line">
              <Line />
            </div>
          </div>
          <p className="home-six__info">
            With what i know, Malezi single handedly changed the face of
            anyone’s home lerning fantasy—something a lot of people didn’t
            notice and maybe still don’t. He brought the story down to a human
            level, dispensing with the cliché archetypes of princes, kings, and
            evil sorcerers. Reading online stuff was like reading Vietnam War
            fiction on peyot. Good guys..
          </p>

          <div className="home-six__user">
            <img src={userTwo} alt="" className="home-six__user--pic" />
            <h4 className="home-six__user--name">Martin Kibet</h4>
            <p className="home-six__user--position">Head of Africa</p>
            <h3 className="home-six__user--company">MADNESS HOUSING INC</h3>
          </div>
        </div>

        <div className="home-six__quote-card">
          <div className="home-six__quote">
            <div className="home-six__quote--quoteIcon">
              <QuoteIcon />
            </div>
            <div className="home-six__quote--shapeIcon">
              <ShapeThree />
            </div>
            <h3 className="home-six__quote--title">THE BRAND</h3>
            <div className="home-six__quote--line">
              <Line />
            </div>
          </div>
          <p className="home-six__info">
            In the interest of transparency, we never use incentives to
            influence these reviews; and because we follow strict privacy
            policies, we never link to a review unless it has been shared
            publicly by the reviewer. We strive to a help them maintain a
            competitive edge. In the complex and rapidly changing world of of
            our partnership with Malezii
          </p>

          <div className="home-six__user">
            <img src={userThree} alt="" className="home-six__user--pic" />
            <h4 className="home-six__user--name">Agness Anviaraa</h4>
            <p className="home-six__user--position">Breakthrough Manager</p>
            <h3 className="home-six__user--company">LINK THE PAZZLE</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionSix;
