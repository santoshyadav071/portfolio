
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import myimage from "../assets/myimage.jpg"

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
        <a className="flex title-font font-medium items-center justify-center sm:justify-start text-gray-900">
          <div>
            <img src={myimage} width={40} className="rounded-full" alt="Profile" />
          </div>
          <span className="ml-3 text-xl">Santosh</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center sm:text-left">
          © 2024 Santosh — All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start flex-wrap">
          {/* Twitter Icon */}
          <a
            href="https://x.com/yad29257?t=zXsDVSNSUPkKtkBXPfkbdw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 mx-2"
          >
            <FaTwitter className="w-5 h-5" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/santoshyadav9739/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 mx-2"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/share/1Ajygk7xQZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 mx-2"
          >
            <FaFacebook className="w-5 h-5" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/santosh-yadav-671611296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 mx-2"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
