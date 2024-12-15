// src/components/Navbar.js
import React from 'react';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar"

const Navbar = () => {
  return (
    
    <nav className=" p-4 shadow-md fixed w-full bg-white z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
  <span className="text-black  bg-clip-text">
    Arkhopravo Sarkar
  </span>
</h2>

        </div>

        <div className="flex items-center">
          <div className="lg:hidden"> {/* Display only on mobile */}
            <button className="e">
             <p className="e">Email: arkho.psarkar@gmail.com</p>
            <p className="e ml-4">Phone: +91 9433355284</p>
            </button>
          </div>
         
          <div className="hidden lg:flex ml-4">
            <p className="t">Email: arkho.psarkar@gmail.com</p>
            <p className="t ml-4">Phone: +91 9433355284</p>
          </div>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
