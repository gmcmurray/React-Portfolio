import React from 'react';
import Email from './Email';
const styles = {
    sectionStyles: {
      display: "flex",
      maxWidth:" 800px"
    },
  };
 
function Contact() {
    return (
        <div style={styles.sectionStyles}  className='aboutme-container'>
            <p>  Phone Number  (650) 880-7464</p> 
            <Email />
            <a href="https://www.linkedin.com/in/george-mcmurray/">LinkedIn</a>        
        </div>
    )
}
export default Contact;