import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import myimage from "../assets/myimage.jpg";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
        <a className="flex title-font font-medium items-center justify-center sm:justify-start text-gray-800 dark:text-white hover:text-blue-800 transition-colors">
          <div className="ring-2 ring-gray-600 rounded-full p-0.5">
            <img 
              src={myimage} 
              width={40} 
              className="rounded-full" 
              alt="Profile" 
            />
          </div>
          <span className="ml-3 text-xl">Santosh</span>
        </a>
        <p className="text-sm text-gray-800 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 text-center sm:text-left">
          © {new Date().getFullYear()} Santosh — All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          {/* Twitter Icon */}
          <a
            href="https://x.com/yad29257?t=zXsDVSNSUPkKtkBXPfkbdw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-800 dark:text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/santoshyadav9739/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-800 dark:text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/share/1Ajygk7xQZ/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-800 dark:text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/santosh-yadav-671611296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;