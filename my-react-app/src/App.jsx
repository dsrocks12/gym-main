import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'; // Corrected component name
import Business from './components/business'; // Corrected component name
import Credits from './components/credits'; // Corrected component name
import Innovation from './components/innovation'; // Corrected component name

const App = () => {
  return (
    <Router>
      <div>
    

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* Corrected component name */}
          <Route path="/business" element={<Business />} /> {/* Corrected component name */}
          <Route path="/credits" element={<Credits />} /> {/* Corrected component name */}
          <Route path="/innovation" element={<Innovation />} /> {/* Corrected component name */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
