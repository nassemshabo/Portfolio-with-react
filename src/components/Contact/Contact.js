import React from "react";

import "./style.contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="send-massage">
          <h4>Send A Message</h4>
          <form>
            <input placeholder=" Your Name" />
            <input placeholder=" Your Email" />
            <input placeholder="Subject" />
            <textarea
              name="comment"
              placeholder="Enter Massage here"
            ></textarea>
            <button>Send Massage</button>
          </form>
        </div>
        <div className="get-touch">
          <h4>Get In Touch</h4>
          <p>
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from you. Simply
            fill the from and send me an email.{" "}
          </p>
          <div class="contact-icons">
            <i class="fab fa-github-alt"></i>
            <i class="fab fa-codepen"></i>
            <i class="fab fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <span>&copy; 2019 By NasimShabo</span>
      </div>
    </div>
  );
};

export default Contact;
