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

function Header(props) {
  const { pages = [], currentPage, setCurrentPage} = props;
  return (
    <header className="header" style={styles.headerContainer}>
      <h1 style={styles.h1} >Portfolio gMan</h1>
      <div className="topnav" id="myTopnav">
        <span
        className={`${currentPage === 'about' && 'navActive'}`}
        onClick={()=>setCurrentPage('about')}> 
          <Link to='/' style={styles.aTag} >Home </Link>
        </span>
        <span
        className={`${currentPage === 'p1' &&  'navActive'}`}
        onClick={()=>setCurrentPage('p1')}> 
        <Link to='/p1' style={styles.aTag}> Projects</Link>
        </span>
        <span
        className={`${currentPage === 'contacts' && 'navActive'}`}
        onClick={()=>setCurrentPage('contacts')}> 
        <Link to='/contacts' style={styles.aTag}> Contact</Link>
        </span>
        <span
        className={`${currentPage === 'AboutMe' && 'navActive'}`}
        onClick={()=>setCurrentPage('AboutMe')}> 
        <Link to='/AboutMe' style={styles.aTag}> About Me</Link>
        </span>
      
        </div>
    </header>
  );
}

export default Header;
