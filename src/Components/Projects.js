import React from 'react';
import bubbleImg from '../images/projects/projects-bubble.png';
import memoryCardImg from '../images/projects/memory-card.png';
import etchSketchImg from '../images/projects/etch-a-sketch.png';
import bopify from '../images/projects/projects-bopify.png';

const Projects = () => {
  return (
    <div className="projects-bg" id="projects">
      <div className="section-header">PROJECTS</div>
      <div className="projects-container">
        <div className="project-section">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://endearing-melba-2702af.netlify.app/"
          >
            <img src={bopify} alt="Bopify" className="projects-images"></img>
          </a>
          <div className="project-description-right">
            <div className="project-titles">Bopify</div>
            <div style={{ fontSize: 24 }} className="projects-description">
              Built with React, Node, Express
            </div>
            <div className="projects-description">
              A web app that converts a user's Spotify playlist to their Kidz
              Bop alternatives (if applicable)
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/otaeotay/bopify"
            >
              View on github
            </a>
          </div>
        </div>
        <div className="project-section">
          <div className="project-description-left" id="reorder-a">
            <div className="project-titles">Memory Card Game</div>
            <div style={{ fontSize: 24 }} className="projects-description">
              Built with React
            </div>
            <div className="projects-description">
              A simple game that will test your shortterm and photographic
              memory
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/otaeotay/memory-card-game"
            >
              View on github
            </a>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://otaeotay.github.io/memory-card-game/"
          >
            <img
              src={memoryCardImg}
              alt="Memory Card Game"
              className="projects-images project-image-right"
            ></img>
          </a>
        </div>
        <div className="project-section">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://otaeotay.github.io/etch-a-sketch/"
          >
            <img
              src={etchSketchImg}
              alt="Etch-a-Sketch Website"
              className="projects-images"
            ></img>
          </a>
          <div className="project-description-right">
            <div className="project-titles">Etch-a-Sketch</div>
            <div className="projects-description">
              Create pixel art with this online sketch board
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/otaeotay/etch-a-sketch"
            >
              View on github
            </a>
          </div>
        </div>
        <div className="project-section">
          <div className="project-description-left" id="reorder-a">
            <div className="project-titles">Bubble - Pomodoro Timer</div>
            <div style={{ fontSize: 24 }} className="projects-description">
              Built with HTML, CSS, JavaScript
            </div>
            <div className="projects-description">
              A Chrome extension that helps users stay productive
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/otaeotay/bubble-pomodoro-chrome-extension"
            >
              View on github
            </a>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chrome.google.com/webstore/detail/bubble/gpphafnehpfmkmoippnipakfeabjcfga"
          >
            <img
              src={bubbleImg}
              alt="Bubble Pomodoro"
              className="projects-images project-image-right"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
