import React from 'react';
const styles = {
    sectionStyles: {
      display: "flex",
      maxWidth:" 800px"
    },
  };
 
function Resume() {
    return (
        <div   style={styles.sectionStyles}  className='resume-container'>
    <p className="resume"> Undergraduate : Duke University ~ Double Major : BS Electrical Engineer, UC Berkeley ~ Math Programming. </p>
    <p className="resume">  Graduate : MS, UC Berkeley ~ Math Programming. MS U of Arizona ~ System Engineering </p>
    <p className="resume"> Work Experience : Extensive experience in Semiconductor Manufacturing /Logistics, IC Design, 
    Quality Assurance and Program Management. </p>

    <p className="resume"> Coding Skills: - HTML, CSS, JavaScript/JQuery, Node, Python, Minizinc </p>
    <p className="resume"> 2021 Full Stack Bootcamp Certification - University of Washington </p>
    <a href="https://github.com/gmcmurray/">gmcmurray-github</a>
        </div>
    )
}

export default Resume;
