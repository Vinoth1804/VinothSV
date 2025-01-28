import React, { useEffect } from "react";

// Assuming ModelViewer is imported correctly
import ModelViewer from '@metamask/logo';

function Main({ id }) {
  useEffect(() => {
    const viewer = ModelViewer({
      pxNotRatio: true,
      width: 200,
      height: 200,
      followMouse: false,
      slowDrift: false,
    });

    const container = document.getElementById('logo-container');
    container.appendChild(viewer.container);

    viewer.lookAt({ x: 100, y: 100 });
    viewer.setFollowMouse(true);

    return () => {
      viewer.stopAnimation();
    };
  }, []);

  return (
    <div id={id} className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Left section: MetaMask Logo */}
        <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
          <div id="logo-container" >
            {/* 3D MetaMask Logo will be inserted here by the JavaScript code */}
          </div>
        </div>

        {/* Right section: main content */}
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
          {/* Subtitle */}
          <p className="text-sm tracking-wide text-gray-200 uppercase">
            Aspiring Software Engineer
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Hi, I am <span className="text-green-400">Vinoth</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-100">
            Looking for enriching experiences
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Im currently a student looking for opportunities to collaborate and learn new skills.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/vinothkumar-mohanraj/"
              className="text-blue-400 hover:text-blue-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Vinoth1804/"
              className="text-black hover:text-gray-800 transition duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:vinothkumarmohanraj13@gmail.com"
              className="text-red-400 hover:text-red-500 transition duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Resume Button */}
          <button
            className="mt-8 px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
            onClick={() => window.open('/Vinothkumar_CV.pdf', '_blank')}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
