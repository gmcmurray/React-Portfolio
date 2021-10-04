import React from 'react';
import Email from './Email'
const styles = {
    sectionStyles: {
      display: "grid",
      maxWidth:" 800px",

    },
    sectionContainer:{
      border: "solid 5px black",
      borderRadius: " 10px",
      justifySelf : "center",
      padding: "3%",
      margin:'20px'
    },
  };
 
function Contact() {
    return (
        <div style={styles.sectionStyles}  className='aboutme-container'>
          <div style={styles.sectionContainer}>
            <h2> Contact Me : </h2>
            <h3>  George McMurray</h3>
            <h3>  Phone Number:  (650) 880-7464</h3> 
            <h3> Email:   <span><a href ='mailto:gmcmurray1493@gmail.com'>gmcmurray1493@gmail.com </a></span></h3> 
            <a href="https://www.linkedin.com/in/george-mcmurray/"><h3> LinkedIn </h3>
           </a>  
           <h3> Leave Message: </h3>
           <Email />
           </div>      
        </div>
    )
}
export default Contact;