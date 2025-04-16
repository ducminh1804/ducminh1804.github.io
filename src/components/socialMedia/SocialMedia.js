import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      <div>
        {socialMediaLinks.github ? (
          <a
            href={socialMediaLinks.github}
            className="icon-button github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span className="detail">https://github.com/ducminh1804</span>
          </a>
        ) : null}
      </div>

      <div>
        {socialMediaLinks.linkedin ? (
          <a
            href={socialMediaLinks.linkedin}
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
            <span className="detail">linkedin.com/in/ducminhvo</span>
          </a>
        ) : null}
      </div>
      <div>
        {socialMediaLinks.gmail ? (
          <a
            href={`mailto:${socialMediaLinks.gmail}`}
            className="icon-button google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
            <span className="detail">voducminh39@gmail.com</span>
          </a>
        ) : null}
      </div>
      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}

      <div>
        {socialMediaLinks.sdt ? (
          <a
            href={socialMediaLinks.kaggle}
            className="icon-button kaggle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-kaggle"></i>
            <span className="detail">+84 383 350 673</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
