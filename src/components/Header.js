import React from 'react';

// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
 
const styles = {
  headerContainer:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    maxHeight: "2ev",
    maxWidth:"96%"
  },
  navActive: {
    backgroundColor: 'white',
    fontWeight: "34px",
  },
  aTag: {
    textDecoration: 'none',
    fontWeight: 'bolder',
    color: 'blue',
    margin:'4px'
  },
  h1: {
    color:"black",
    fontSize:"1.8em"
  }
}

function Header({  currentPage, handlePageChange} ) {
  return (
    <div className="header" style={styles.headerContainer}>
      <h1 style={styles.h1} >Portfolio gMan</h1>
      <ul className="topnav" id="myTopnav">
        <li>
          <a
          href='#home'
          className={currentPage === 'Home' ? 'navActive' : 'nav-link'}
          onClick={(event)=>{event.stopPropagation();handlePageChange('Home'); console.log("home")} } 
          style={styles.aTag} >
            Home  
            </a>

        </li>
        <li>
          <a
          href='#projects'
          onClick={(event)=>{event.stopPropagation();handlePageChange('p1')}}
          className={currentPage === 'p1' ? 'navActive' : 'nav-link'}
          style={styles.aTag} > 
          Projects  
          </a>
        </li>
        <li>
          <a
          href='#AboutMe'
          className={currentPage === 'AboutMe' ? 'navActive': 'nav-link'}
          onClick={(event)=>{event.stopPropagation();handlePageChange('AboutMe')} }
          style={styles.aTag}> 
        About Me 
        </a>
        </li>
        <li>
          <a
          href='#Resume'
          className={currentPage === 'AboutMe' ? 'navActive': 'nav-link'}
          onClick={(event)=>{event.stopPropagation();handlePageChange('Resume')} }
          style={styles.aTag}> 
        Resume
        </a>
        </li>
        <li>
          <a
          href='#contacts'
          onClick={(event)=>{event.stopPropagation();handlePageChange('Contact')} }
          className={currentPage === 'Contact' ? 'navActive' : 'nav-link'}
          style={styles.aTag} >  
         Contact 
         </a>
        </li>
      
        </ul>
    </div>
  );
}

export default Header;
