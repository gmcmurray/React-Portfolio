import React from 'react';
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
    }
  };
 
function AboutMe() {
    return (
<div   style={styles.sectionStyles}  className='resume-container'>
  <h2> About Me </h2>
    <div style={styles.sectionContainer}>
      <div style={styles.section}>
      <h3> Coding Experience</h3>
      <p>  Repo Portfolio : Full Stack MERN with GraphQL, MySQL App deployment.  <span><a href="https://github.com/gmcmurray/">gmcmurray-github</a></span> </p>
      <p > Coding Languages:  HTML, CSS, JavaScript/JQuery, NodeJS, Python, Minizinc </p>
      <p > Certifications : 2021 Full Stack Bootcamp Certification - University of Washington </p>
    
    </div>
    <div style={styles.section}>
     <h3> Semiconductor Industry Experience </h3>
    <ul>
      <li>Program Management - New Product Development and Life Cycle Management</li>
      <li> Customer Quality Assurance and Quality Systems </li>
      <li> Semiconductor Failure Analysis </li> 
      <li> Wafer Fab and BackEnd Manufacturing Logistics            </li>
      <li> Analog Integrated Circuit Design </li>
    </ul> 

    <a href='./resume.pdf' target='_blank'>Resume</a>
  
    </div>
    <div>
    <div style={styles.section}>
    <h3> Formal Education</h3>
    <ul>
    
    <li><p>  Graduate :
      <ul>
        <li> MS,PhD (ABD) Operations Research - UC Berkeley </li>
        <li> MS System Engineering - University of Arizona  </li>
        <li> MS Electrical Engineering - Southern Methodist University  </li>
      </ul>
    </p></li>
     <li><p> Undergraduate : 
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

export default AboutMe;
