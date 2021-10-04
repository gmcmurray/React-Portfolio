import React from 'react';
import  gMan  from '../assets/images/gMan.jpg';
 
const styles = {
    sectionStyles: {
      display: "grid", 
      maxWidth:"80%",
      placeItems:"center"
    },
    sectionContainer:{
      display:'flex',
      borderRadius: " 10px",
      justifySelf : "left",
      width:"100%"
 
    },
    section:{
      border: "solid 5px green",
      borderRadius: " 5px",
      margin:"5px",
      padding:"10px",
      minWidth:"40%"
    },
    section1:{
      border: "solid 5px green",
      borderRadius: " 5px",
      margin:"5px",
      padding:"10px",
      minWidth:"60%",
      fontSize: '2.5vw'
    },
    img:{
      objectPosition: "5px 5px",
       height:"90%" ,
       width: "100%",
       objectFit: "cover"
   },
    subtitle:{textDecorationLine: 'underline',
  fontWeight:'bold'}
  };
 
function AboutMe() {
    return (
<div   style={styles.sectionStyles}  className='resume-container'>
  <h2> About George McMurray </h2>
    <div style={styles.sectionContainer}>
      
    <div className="gman" style={styles.section} >
            <img style={styles.img} src={gMan} alt=""/>
        </div>
      <div style={styles.section1}>
        <ul>
          <li>Extensive career in Semiconductor industry covering design engineer to Directing Operations.</li>
          <li>Started Coding in Engineering School using Matlab, S (predecessor to R) and C languages with applications in Statistical Analysis.</li>
          <li>Hobbyist in Constraint Programming using Minizinc and Python. Dabbled in Bioinformatics basic apps</li>
        </ul>
     
      </div>
        
    </div>
</div>
    )
}

export default AboutMe;
