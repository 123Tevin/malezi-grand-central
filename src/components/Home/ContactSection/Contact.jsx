import "./Contact.scss";

import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";
import { ReactComponent as VerticalLine } from "../../../assets/icons/vertLine.svg";
import { ReactComponent as EmailIcon } from "../../../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/mobile.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";

function Contact() {
  return (
    <div className="contact__back-circleWrapper">
      <div className="contact__back-circle"></div>
      <div className="contact">
        <h3 className="contact__title">CONTACT US</h3>

        <div className="lineIcon">
          <LineSixIcon />
          <Triange />
          <LineSixIcon />
        </div>
        <p className="contact__desc">
          If you have any questions, feel free to get in touch
        </p>
        <div className="contact__info">
          <div className="contact__left">
            {/* <div className="contact__leftWrapper">
              <div className="contact__left--left">
                <h3>Phone</h3>
                <p>0712345678</p>
              </div>
              <VerticalLine />
              <div className="contact__left--right">
                <PhoneIcon />
              </div>
            </div> */}
            <div className="contact__leftWrapper">
              <div className="contact__left--left">
                <h3>ADDRESS</h3>
                <p>Kenya, Nigeria</p>
              </div>
              <VerticalLine />
              <div className="contact__left--right">
                <LocationIcon />
              </div>
            </div>
            <div className="contact__leftWrapper">
              <div className="contact__left--left">
                <h3>EMAIL</h3>
                <p>hello@malezi.co.ke/ hello@malezi.ng</p>
              </div>
              <VerticalLine />
              <div className="contact__left--right">
                <EmailIcon />
              </div>
            </div>
          </div>
          <div className="contact__right">
            <form action="">
              <div className="contact__right--fieldController">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
              </div>
              <div className="contact__right--fieldController">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="contact__right--fieldController">
                <textarea rows={3} type="text" placeholder="Message"></textarea>
              </div>
              <div className="contact__right--bottom">
                <button>Submit</button>
              </div>
            </form>
            <p className="home-footer">© 2021 Malezi. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
