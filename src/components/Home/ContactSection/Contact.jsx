import "./Contact.scss";
import emailjs from "emailjs-com";
import { useToasts } from "react-toast-notifications";

import { ReactComponent as Triange } from "../../../assets/icons/triangle.svg";
import { ReactComponent as LineSixIcon } from "../../../assets/icons/line6.svg";
import { useState } from "react";

function Contact() {
  const { addToast } = useToasts();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_rjdluhx",
        "template_cqkcpqg",
        state,
        "user_hARhvvMeSAkR7fMaNG9jJ"
      )
      .then(
        function (response) {
          addToast("Email Successfully sent. Thank you!", {
            appearance: "success",
            autoDismiss: true,
          });
        },
        function (error) {
          addToast("Could not sent this email. Try later!", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      );
    resetForm();
  }

  function resetForm() {
    setState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  function handleChange(e) {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

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
          <div className="contact__right">
            <form onSubmit={handleSubmit}>
              <div className="contact__right--fieldController">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={state.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={state.email}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  required
                  value={state.phone}
                />
              </div>
              <div className="contact__right--fieldController">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleChange}
                  required
                  value={state.subject}
                />
              </div>
              <div className="contact__right--fieldController">
                <textarea
                  rows={3}
                  type="text"
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                  required
                  value={state.message}
                ></textarea>
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
