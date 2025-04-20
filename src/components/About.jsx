// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-6 max-w-3xl bg-black mx-auto text-2xl leading-relaxed animate-slide-in-up">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p>
        This project, <strong>System Log Displayer</strong>, is a part of my coursework for the Operating Systems subject.
        It demonstrates real-time log monitoring and visualization using modern web technologies.
      </p>
      <p className="mt-4">
        Developed by <strong className="text-blue-400">Syam Praneeth</strong>, this application helps understand how system-level events can be captured, processed, and displayed on the web.
      </p>
    </div>
  );
};

export default About;
