import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myimage from "../assets/myimage.jpg";


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cvUrl = 'mycv.pdf';

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <div>
            <img src={myimage} width={40} alt="Logo" className='rounded-full' />
          </div>
          <span className="ml-3 text-xl font-bold hover:text-blue-700 cursor-pointer">Santosh</span>
        </Link>
        <button onClick={toggleMenu} className="md:hidden flex items-center p-2 rounded text-black hover:text-blue-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="mr-5 hover:text-blue-700 font-bold cursor-pointer">Home</Link>
          <Link to="/about" className="mr-5 hover:text-blue-700 font-bold cursor-pointer">About Me</Link>
          <Link to="/projects" className="mr-5 hover:text-blue-700 font-bold cursor-pointer">Project</Link>
          <Link to="/contact" className="mr-5 hover:text-blue-700 font-bold cursor-pointer">Contact Me</Link>
        </nav>
        <a 
          href={cvUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center border-0 py-1 px-3 font-bold focus:outline-none rounded text-base mt-4 md:mt-0 text-black hover:text-blue-700"
        >
          Download CV
        </a>

        {/* Toggle Switch for Dark/Light Theme */}
        <div className="ml-5 flex items-center font-bold">
          <span className="mr-2">{darkMode ? 'Dark' : 'Light'}</span>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
