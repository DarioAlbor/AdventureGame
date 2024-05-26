// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import CardHelpGame from './components/buttons/helpgame';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="helpgame" element={<CardHelpGame />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
