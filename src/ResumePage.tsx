import React from 'react';
import './ResumePage.css'; 

const ResumePage: React.FC = () => {
  return (
    <div className="resume-page">
      <h1> Enjoy! </h1>
      <img src="resume.jpg" alt="My Resume" className="resume-image" />
    </div>
  );
};

export default ResumePage;
