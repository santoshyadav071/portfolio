import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import myimage from "../assets/myimage.jpg";

const Header = () => {
  const cvUrl = 'santosh.cv.pdf';
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference or use system preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 shadow-md dark:shadow-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0 group">
          <div className="ring-2 ring-gray-300 dark:ring-gray-600 rounded-full p-0.5 group-hover:ring-blue-500 transition-all">
            <img 
              src={myimage} 
              width={40} 
              alt="Logo" 
              className="rounded-full" 
            />
          </div>
          <span className="ml-3 text-xl font-bold hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors">
            Santosh
          </span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link 
            to="/" 
            className="mr-5 hover:text-blue-700 dark:hover:text-blue-400 font-bold cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="mr-5 hover:text-blue-700 dark:hover:text-blue-400 font-bold cursor-pointer transition-colors"
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className="mr-5 hover:text-blue-700 dark:hover:text-blue-400 font-bold cursor-pointer transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="mr-5 hover:text-blue-700 dark:hover:text-blue-400 font-bold cursor-pointer transition-colors"
          >
            Contact Me
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-blue-600 dark:border-blue-400 py-1 px-4 font-bold focus:outline-none rounded-full text-base mt-4 md:mt-0 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-900 hover:text-white dark:hover:text-white transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;