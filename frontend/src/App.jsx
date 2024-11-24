import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

// Import your city pages
import Jaipur from './pages/Jaipur/Jaipur';
import Delhi from './pages/Delhi/Delhi';
import Indore from './pages/Indore/Indore';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Show login popup if showLogin is true */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      <div className="app">
        {/* Navbar with setShowLogin prop */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/indore" element={<Indore />} />
        </Routes>
      </div>

      {/* Footer is rendered outside of the Routes */}
      <Footer />
    </>
  );
};

export default App;
