import React from "react";
import PropTypes from "prop-types";
import devDotToIcon from "./assets/socials/devdotto.svg";
import envelopeIcon from "./assets/socials/envelope.svg";
import gitHubIcon from "./assets/socials/github.svg";
import instagramIcon from "./assets/socials/instagram.svg";
import linkedInIcon from "./assets/socials/linkedin.svg";
import mediumIcon from "./assets/socials/medium.svg";
import twitterIcon from "./assets/socials/twitter.svg";
import youTubeIcon from "./assets/socials/youtube.svg";

const Footer = (props) => {
    const {
      devDotTo,
      email,
      gitHub,
      instagram,
      linkedIn,
      medium,
      name,
      primaryColor,
      twitter,
      youTube,
    } = props;
  
    return (
      <div
        id="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          padding: "5rem 0 3rem",
          backgroundColor: "rgb(177, 177, 253)",
          width: "100vw"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {email && (
            <a href={`mailto:${email}`}>
              <img src={envelopeIcon} alt="email" className="socialIcon" />
            </a>
          )}
          {devDotTo && (
            <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
              <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
            </a>
          )}
          {gitHub && (
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
          {medium && (
            <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
              <img src={mediumIcon} alt="Medium" className="socialIcon" />
            </a>
          )}
          {twitter && (
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="socialIcon" />
            </a>
          )}
          {youTube && (
            <a
              href={`https://www.youtube.com/c/${youTube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
            </a>
          )}
        </div>
        <p className="small" style={{ marginTop: 0, color: "black" }}>
          Created by {name}
        </p>
      </div>
    );
  };
  
  Footer.propTypes = {
    devDotTo: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    medium: PropTypes.string,
    name: PropTypes.string,
    primaryColor: PropTypes.string,
    twitter: PropTypes.string,
    youTube: PropTypes.string,
  
  };
  
  export default Footer;
  