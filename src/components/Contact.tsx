import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          
          {/* 📧 CONTACT INFO */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kshyamsundarpatra@gmail.com" data-cursor="disable">
                kshyamsundarpatra@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+917606935184" data-cursor="disable">
                +91 7606935184
              </a>
            </p>
          </div>

          {/* 🔗 SOCIAL LINKS */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Shyam04247"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/kshyamsundarpatra/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/shyampatraa?igsh=MTF5d2dhZ2NwcWZ0Mw=="
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

          </div>

          {/* 🎯 YOUR CREDIT */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>K Shyamsundar Patra</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;