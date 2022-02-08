// import { useContext } from "react";
// import NoteContext from "../context/notes/NoteContext";
import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/satyam-tomar-0873a91b0/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="satyamimg.jpg"
              alt="Founder"
            />
            <Typography>Satyam Tomar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit me
            </Button>
            <span>
              Login/Signup mern template.{" "}
            </span>
            <span>
              You can write your own notes, save it on cloud server and fetch
              all your notes anytime.{" "}
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Social Media</Typography>
            <a href="https://github.com/satyamtomar" target="blank">
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/satyam-tomar-0873a91b0/"
              target="blank"
            >
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;