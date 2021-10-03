import React, {useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
import Home from './components/Home';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const pages = ['Home','p1','AboutMe', 'Contact','Resume']
  const [currentPage, setCurrentPage] = useState(pages[0])
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'p1') {
      return <Portfolio />;
    }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
     {renderPage()}
    </div>

 
  );
}

export default App;
