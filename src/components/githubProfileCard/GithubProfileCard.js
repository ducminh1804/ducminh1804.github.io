import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            {/* <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2> */}
            
            <div className="opp-div">
              {/* <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span> */}
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src="https://avatars.githubusercontent.com/u/98726164?u=9984df8dae80faac34c7b00d58b8ea4ba6e1abdb&v=4"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
