import React from "react";
import profilePic from "./styles/ricsi_profile.jpg"
import "./styles/about.css";

export default function About() {
  return (
    <>
      <hr />
      <h1>About Me</h1>
      <div className="about-frame">
        <div className="about-profile-picture">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="about-text">
          <div className="about-name">Vuong-Tan Quang Richard</div>
          <div className="about-description">
            I studied faculty of finance and accountancy at Budapest Business
            School.
            <br />
            After two years of study and a half year of internship, I decided to
            change my career path to become a developer.
            <br />I have a diploma in web development. Ever since then i
            self-learned react. My next goal is to learn typescript and writing
            cleaner codes! My very first{" "}
            <a href="https://ebelet.gportal.hu/" target="_blank">
              website
            </a>{" "}
            I created as a teenager.
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
