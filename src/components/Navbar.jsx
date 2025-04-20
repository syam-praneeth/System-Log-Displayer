// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from './BackgroundVideo'; // 👈 import your video component

function Navbar() {
  return (
    <div className="relative">
      <BackgroundVideo /> {/* 👈 include the background video */}

      <nav className="bg-transparent bg-opacity-80 shadow-md py-4 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Log Displayer
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white text-2xl hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              Home
            </Link>
            <Link 
              to="/logs" 
              className="text-white text-2xl hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              Logs
            </Link>
            <Link 
              to="/about" 
              className="text-white text-2xl hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              About
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white text-2xl hover:text-blue-600 focus:outline-none">
              <svg 
                className="w-8 h-8 transition transform hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
