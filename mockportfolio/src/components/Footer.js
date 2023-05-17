import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Muniba-Ahmed?tab=repositories">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/MunibaAhmed786">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/muniba-ahmed/">
          <LinkedInIcon />
        </a>
        <a href="mailto:muniba1ahmed@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2023 Muniba Ahmed</p>
    </div>
  );
}

export default Footer;
