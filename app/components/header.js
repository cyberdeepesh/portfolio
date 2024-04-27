import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-xl font-bold">DEEPESH KUMAR</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#projects" className="text-white hover:text-gray-300">My Projects</a></li>
            <li><a href="#skills" className="text-white hover:text-gray-300">My Skills</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact Me</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/cyberdeepesh/" className="text-white hover:text-gray-300">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/deepeshdcd" className="text-white hover:text-gray-300">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
