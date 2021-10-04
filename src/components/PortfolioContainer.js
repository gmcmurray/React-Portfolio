import React, {useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Home from './Home';
import Footer from './Footer';
// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function PortfolioContainer() {
  // const pages = ['Home','p1','AboutMe', 'Contact','Resume'];
  const [currentPage, setCurrentPage] = useState('p1')
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
    if (currentPage === 'Resume') {
      return <Resume />;
    }
 
      return <Contact />;
  };

  const handlePageChange = (page) => {setCurrentPage(page); console.log(page)};
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
 
     {renderPage()}
     {/* <Resume /> */}
     <Footer />
    </div>

 
  );
}

export default PortfolioContainer;
