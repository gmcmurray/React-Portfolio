import React from 'react';
import {BrowserRouter as Route, Switch, Link} from 'react-router-dom';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
const styles = {
  headerContainer:{
    display: "flex",
    justifyContent:"space-around",
    alignItems:"center"
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
  }
}

function Header(props) {
  const { pages = [], currentPage, setCurrentPage} = props;
  return (
    <header className="header" style={styles.headerContainer}>
      <h1 className="" >Portfolio gMan</h1>
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
