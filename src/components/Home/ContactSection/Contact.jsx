import "./Contact.scss";

import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";
import { ReactComponent as VerticalLine } from "../../../assets/icons/vertLine.svg";
import { ReactComponent as EmailIcon } from "../../../assets/icons/email.svg";
import { ReactComponent as BtnThre } from "../../../assets/icons/btn3.svg";

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__title">CONTACT US</h3>
      <p className="contact__desc">
        If you have any questions, feel free to get in touch
      </p>

      <div className="contact__lineIcon">
        <LineSixIcon />
        <Triange />
        <LineSixIcon />
      </div>
      <div className="contact__info">
        <div className="contact__left">
          <div className="contact__leftWrapper">
            <div className="contact__left--left">
              <h3>Phone</h3>
              <p>0712345678</p>
            </div>
            <VerticalLine />
            <div className="contact__left--right">
              <EmailIcon />
            </div>
          </div>
          <div className="contact__leftWrapper">
            <div className="contact__left--left">
              <h3>Phone</h3>
              <p>0712345678</p>
            </div>
            <VerticalLine />
            <div className="contact__left--right">
              <EmailIcon />
            </div>
          </div>
          <div className="contact__leftWrapper">
            <div className="contact__left--left">
              <h3>Phone</h3>
              <p>0712345678</p>
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
              <input type="text" placeholder="Message" />
            </div>
            <div className="contact__right--bottom">
              <input type="checkbox" name="updates" id="updates" />
              <p>I would like to receive malezi updates</p>
              <button>
                <BtnThre />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
