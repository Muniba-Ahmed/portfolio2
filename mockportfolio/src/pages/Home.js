import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Muniba Ahmed</h2>

        <div className="prompt">
          <p>
            A software developer with a passion for creating beautiful things
          </p>
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
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h3>Front-End</h3>
            <span>
              JavaScript, React.js, Next.js, ChakraUI, MaterialUI, Styled
              Components, Redux, Hooks, Axios, Context API, Jest, Cypress, HTML,
              CSS
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              Node.js, Express.js, Knex, SQLite3, GitHub, VS Code, Vercel,
              Heroku
            </span>
          </li>
          <li className="item">
            <h3>Additional Skills</h3>
            <span>
              Git CLI, Data Structures and Algorithms, Object Oriented
              Programming, Debugging, Troubleshooting
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
