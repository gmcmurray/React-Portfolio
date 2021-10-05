import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
// Here we are importing a CSS file as a dependency
import '../styles/Footer.css';
 
const styles = {
   footerContainer:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    maxHeight: "2ev",
    maxWidth:"96%",
    backGroundColor:"gold"
  },
  
}

function Footer() {
  return (
    <div className="footer" style={styles.footerContainer}>
     <a href="https://stackoverflow.com/c/mycellium-rising/" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faStackOverflow} className="stackoverflow-icon"/>  <i className="fab fa-stack-overflow"></i></a>
     <a href="https://github.com/gmcmurray/" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} className="github-icon"/></a>
     <a href="https://www.linkedin.com/in/george-mcmurray/"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/></a>

    </div>
  );
}

export default Footer;