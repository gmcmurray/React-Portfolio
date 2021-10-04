import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  myResume  from '../assets/resume.pdf'
 
const styles = {
    sectionStyles: {
      display: "grid", 
      maxWidth:"80%",
      placeItems:"center"
    },
    sectionContainer:{
      border: "solid 5px black",
      borderRadius: " 10px",
      justifySelf : "center"
    },
    section:{
      border: "solid 5px green",
      borderRadius: " 5px",
      margin:"5px",
      padding:"10px"
    },
    icon:{
     font:"20px"
    },
    subtitle:{textDecorationLine: 'underline',
  fontWeight:'bold'},

  download:{
    border: "solid 2px black",
    borderRadius: " 10px",
    background :"lime",
    padding: "2px"
  }
  };
 
function Resume() {
    return (
<div   style={styles.sectionStyles}  className='resume-container'>
  <h2> About George McMurray </h2>
 
  <div style={styles.download} >
  <a href={myResume} download='myResume' >Down Load Resume</a>
  </div>
  <br></br>
    <div style={styles.sectionContainer}>
      <div style={styles.section}>
      <h3> Coding Experience</h3>
      <p>  <span  style={styles.subtitle}>Repo Portfolio </span>: Full Stack MERN with GraphQL, MySQL App deployment.  
 
      <span><a href="https://github.com/gmcmurray/" target='_blank' rel="noreferrer" > 
      <FontAwesomeIcon icon={faGithub} className="github-icon" size={25}/></a></span> 
 
      </p>


      <p > <span  style={styles.subtitle}>Coding Languages </span>:  HTML, CSS, JavaScript/JQuery, NodeJS, Python, Minizinc </p>
      <p > <span  style={styles.subtitle}>Certifications </span>: 2021 Full Stack Bootcamp Certification - University of Washington </p>
    
    </div>
    <div style={styles.section}>
     <h3> Semiconductor Industry Experience </h3>
    <ul>
      <li>Program Management - New Product Development and Life Cycle Management</li>
      <li> Customer Quality Assurance and Quality Systems </li>
      <li> Semiconductor Failure Analysis </li> 
      <li> Wafer Fab and BackEnd Manufacturing Logistics            </li>
      <li> Analog Integrated Circuit Design </li>
      <li> Product and Test Engineering </li>
    </ul> 

    
  
    </div>
    <div>
    <div style={styles.section}>
    <h3> Formal Education</h3>
    <ul>
    
    <li><p><span  style={styles.subtitle}>Graduate </span>:
      <ul>
        <li> MS,PhD (ABD) Operations Research - UC Berkeley </li>
        <li> MS System Engineering - University of Arizona  </li>
        <li> MS Electrical Engineering - Southern Methodist University  </li>
      </ul>
    </p></li>
     <li><p> <span  style={styles.subtitle}>Undergraduate </span>: 
      <ul>
       <li>Duke University ~ Double Major : BS Electrical Engineer</li>
       <li>Duke University ~ Double Major : BS Mathermatics</li>
       </ul> 
      </p></li>  
    </ul> 
    </div>
    </div>
    </div>
</div>
    )
}

export default Resume;