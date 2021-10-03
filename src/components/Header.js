import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
const styles = {
  headerContainer:{
    display: "flex",
    flexDirection:"column",
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

function Header(props ) {
  const {  currentPage, setCurrentPage} = props;
  return (
    <header className="header" style={styles.headerContainer}>
      <h1 style={styles.h1} >Portfolio gMan</h1>
      <ul className="topnav" id="myTopnav">
        <li>
          <a
          href='#home'
          className={`${currentPage === 'Home' && 'navActive'}`}
          onClick={()=>setCurrentPage('Home')}  
          style={styles.aTag} >
            Home  
            </a>

        </li>
        <li>
          <a
          href='#projects'
          onClick={()=>setCurrentPage('p1')}
          className={`${currentPage === 'p1' &&  'navActive'}`}
          style={styles.aTag} > 
          Projects  
          </a>
        </li>
         
        <li>
          <a
        className={`${currentPage === 'contacts' && 'navActive'}`}
        onClick={()=>setCurrentPage('contacts')} 
         style={styles.aTag} >  
         Contact 
         </a>
        </li>

        <li>
          <a
        className={`${currentPage === 'AboutMe' && 'navActive'}`}
        onClick={()=>setCurrentPage('AboutMe')} 
        style={styles.aTag}> 
        About Me 
        </a>
        </li>
      
        </ul>
    </header>
  );
}

export default Header;
