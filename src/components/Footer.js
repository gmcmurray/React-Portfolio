import React from 'react';

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
     <a href="https://github.com/gmcmurray/" target='_blank' rel="noreferrer" ><h4>github</h4></a>
     <a href="https://www.linkedin.com/in/george-mcmurray/"><h4> LinkedIn </h4></a>

    </div>
  );
}

export default Footer;