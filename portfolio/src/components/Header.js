import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="" >Portfolio gMan</h1>
      <div className="topnav" id="myTopnav">
        <a href="#p1">Projects</a>
        <a href="#contacts">Contact</a>
        <a href="#AboutMe">About</a>
        </div>
    </header>
  );
}

export default Header;
