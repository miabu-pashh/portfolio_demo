import React from "react";
import "./Css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="icon linkedin">
          <div className="tooltip">Linkedin </div>
          <span>
            <a
              href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/"
              target="_blank">
              <i class="	fa fa-linkedin-square"></i>
            </a>
          </span>
        </div>

        <div className="icon github">
          <div className="tooltip">Github </div>
          <span>
            <a
              href="https://github.com/miabu-pashh"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa fa-github"></i>
            </a>
          </span>
        </div>

        <div className="icon instagram">
          <div className="tooltip">Instagram </div>
          <span>
            <a
              href="https://www.instagram.com/maibu.pashh/"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa fa-instagram"></i>
            </a>
          </span>
        </div>
        <div className="icon facebook">
          <div className="tooltip">Facebook </div>
          <span>
            <a
              href="https://m.facebook.com/maibubpashaTT?eav=AfaRbec6VZKTJhDFzIUZz9AWuX3VK9wyr9bzGG9tpoiFlaCXAAhpO_85rkoYHfjz96o&paipv=0"
              target="_blank"
              rel="noopener noreferrer">
              <i class="fa fa-facebook-square"></i>
            </a>
          </span>
        </div>
        <div className="icon youtube">
          <div className="tooltip">Youtube </div>
          <span>
            <a
              href="https://www.youtube.com/channel/UC6_BHbgPq127AY2w1-aMhLQ"
              target="_blank"
              rel="noopener noreferrer">
              <i class="	fa fa-youtube-play"></i>
            </a>
          </span>
        </div>
      </div>
      {/* <h2>THIS IS CONTACT PAGE</h2> */}
    </div>
  );
}

export default Contact;
