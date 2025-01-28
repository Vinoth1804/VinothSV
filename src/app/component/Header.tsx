import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu when on large screens
      }
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 fixed w-full top-0 left-0 z-50">

      <nav className="container mx-auto py-4 flex items-center justify-between px-6">
        {/* Brand Name */}
        <div className="text-white font-bold text-2xl">
          <a href="#" className="hover:text-yellow-400 transition duration-300">VK</a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="text-yellow-500 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <i className="fas fa-times w-6 h-6"></i> // Close icon
          ) : (
            <i className="fas fa-bars w-6 h-6"></i> // Hamburger icon
          )}
        </button>

        {/* Navigation Links (Desktop View) */}
        <div className="hidden md:flex space-x-6 text-white text-lg">
          <a href="#home" className="hover:text-yellow-400 transition duration-300 cursor-pointer">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition duration-300 cursor-pointer">About</a>
          <a href="#skills" className="hover:text-yellow-400 transition duration-300 cursor-pointer">Skills</a>
          <a href="#projects" className="hover:text-yellow-400 transition duration-300 cursor-pointer">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition duration-300 cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-teal-800 text-white shadow-lg">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-300" onClick={toggleMenu} aria-label="Close menu">
            <i className="fas fa-times w-6 h-6"></i>
          </button>

          {/* Menu Items */}
          <div className="space-y-4 py-6 px-6">
            <div className="block border-b-2 border-dashed py-[56px]">
              <span className="flex items-center justify-center">Lets Build</span>
            </div>
            <a href="#home" className="flex items-center justify-center hover:text-yellow-400 transition duration-300 cursor-pointer py-2" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="flex items-center justify-center hover:text-yellow-400 transition duration-300 cursor-pointer py-2" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="flex items-center justify-center hover:text-yellow-400 transition duration-300 cursor-pointer py-2" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="flex items-center justify-center hover:text-yellow-400 transition duration-300 cursor-pointer py-2" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="flex items-center justify-center hover:text-yellow-400 transition duration-300 cursor-pointer py-2" onClick={toggleMenu}>
              Contact
            </a>

            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-5 py-7">
              <a href="https://github.com/Vinoth1804" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400 transition duration-300 cursor-pointer py-2">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vinothkumar-mohanraj/" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-400 transition duration-300 cursor-pointer py-2">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
