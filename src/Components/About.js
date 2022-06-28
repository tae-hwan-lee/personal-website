import React from 'react';
import meNarchie from '../images/about/meNarchie.JPG';
// import calpolylogo from '../images/about/calpoly.png';
import htmllogo from '../images/about/html.svg';
import csslogo from '../images/about/css.svg';
import jslogo from '../images/about/js.svg';
import reactlogo from '../images/about/react.svg';
import nodejslogo from '../images/about/nodejs.svg';
import expresslogo from '../images/about/expressjs.png';
import gitlogo from '../images/about/git.svg';
import mongodblogo from '../images/about/mongodb.png';

const About = () => {
  return (
    <div className="about-bg" id="about">
      <div className="section-header ">ABOUT</div>

      <div className="about-container">
        <div className="about-sections">
          <div className="about-description">
            <img src={meNarchie} alt="meNarchie" className="about-archie"></img>
            <ul className="about-me">
              <li className="about-me-item">
                I graduated from California Polytechnic State University, San
                Luis Obispo with a bachelor’s degree in Mechanical Engineering
                in 2019.
              </li>
              <li className="about-me-item">
                I recently realized my passion for coding and creating on the
                internet.{' '}
                <b>I am now pursuing an exciting career in web development!</b>
              </li>
              <li className="about-me-item">
                Other than my life on the internet, I enjoy surfing, playing
                video games, and hanging out with my dog, Archie.
              </li>
            </ul>
          </div>
          <div className="about-skills">
            <ul className="about-skills-list">
              <li>
                <img
                  src={htmllogo}
                  className="skills-logos"
                  alt="HTML5 Logo"
                ></img>
                HTML5
              </li>
              <li>
                <img
                  src={csslogo}
                  className="skills-logos"
                  alt="CSS3 Logo"
                ></img>
                CSS3
              </li>
              <li>
                <img
                  src={jslogo}
                  className="skills-logos"
                  alt="Javascript Logo"
                ></img>
                JAVASCRIPT
              </li>
              <li>
                <img
                  src={reactlogo}
                  className="skills-logos"
                  alt="ReactJS Logo"
                ></img>
                REACT
              </li>
              <li>
                <img
                  src={nodejslogo}
                  className="skills-logos"
                  alt="NodeJS Logo"
                ></img>
                NODEJS
              </li>
              <li>
                <img
                  src={expresslogo}
                  className="skills-logos"
                  alt="ExpressJS Logo"
                ></img>
                EXPRESSJS
              </li>
              <li>
                <img
                  src={gitlogo}
                  className="skills-logos"
                  alt="git Logo"
                ></img>
                GIT
              </li>
              <li>
                <img
                  src={mongodblogo}
                  className="skills-logos"
                  alt="MongoDB Logo"
                ></img>
                MONGODB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
