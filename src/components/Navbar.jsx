// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
  <span className="bg-gradient-to-r from-gray-500 to-blue-700 text-transparent bg-clip-text">
    Arkhopravo Sarkar
  </span>
</h2>

        </div>
        <div className="flex items-center">
          <div className="lg:hidden"> {/* Display only on mobile */}
            <button className="text-white">
              {/* Add your mobile menu icon (e.g., hamburger icon) here */}
              {/* For example: <FontAwesomeIcon icon={faBars} /> */}
              <p className="text-white">Email: arkho.psarkar@gmail.com</p>
            <p className="text-white ml-4">Phone: +91 9433355284</p>
            </button>
          </div>
         
          <div className="hidden lg:flex ml-4">
            <p className="text-white">Email: arkho.psarkar@gmail.com</p>
            <p className="text-white ml-4">Phone: +91 9433355284</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
