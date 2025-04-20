// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Home from './components/Home';
import Logs from './components/LogViewer';
import About from './components/About';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-0" />
      <Router>
        <Navbar />
        <main className="relative z-10 overflow-hidden pt-20 px-4 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
