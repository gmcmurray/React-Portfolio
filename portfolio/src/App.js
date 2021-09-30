import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const pages = ['AboutMe', 'Contact', 'p1']
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <Router>
    <div>

      <Header 
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} />
 
      <Switch>
        <Route exact path = '/p1' component={Portfolio}/>
        <Route exact path = '/AboutMe' component={Resume}/>
        <Route exact path = '/Contact' component={Contact}/>
      </Switch>
    </div>
    {/* <Contact /> */}
    </Router>
  );
}

export default App;
