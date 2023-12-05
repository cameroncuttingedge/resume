import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing">
      <h1>Welcome to My Website</h1>
      <p>Hi, I'm Cameron Mora. I'm a software engineer.</p>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/cameron-mora-65151b126/" className="linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/cameroncuttingedge" className="github" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      <a href="/resume" className="resume-link">View My Resume</a>
    </div>
  );
};

export default LandingPage;
