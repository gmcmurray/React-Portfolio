import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const pages = ['p1','AboutMe', 'Contact','Resume']
  const [currentPage, setCurrentPage] = useState(pages[0])
  
  
  return (
    <div>
      <Header 
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} />
      <Portfolio />
      <AboutMe />
      <Contact />  
 
    </div>

 
  );
}

export default App;
