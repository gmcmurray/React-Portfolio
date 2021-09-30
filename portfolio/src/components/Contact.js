import React from 'react';
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
            <a href="mailto:gmcmurray1493@gmail.com">Email</a> 
            <a href="https://www.linkedin.com/in/george-mcmurray/">LinkedIn</a>        
        </div>
    )
}
export default Contact;