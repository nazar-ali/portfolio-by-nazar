import React, { useState } from "react";
import { Home, User, Folder, FileText, Mail, Menu, X } from "lucide-react";

const Navbar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        
        {/* LOGO */}
        <div className="text-xl font-bold">Nazar</div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <li onClick={() => handleClick("home")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Home size={18} /> Home
          </li>

          <li onClick={() => handleClick("skills")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <User size={18} /> Skillset
          </li>

          <li onClick={() => handleClick("projects")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Folder size={18} /> Projects
          </li>

          <li onClick={() => handleClick("resume")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <FileText size={18} /> Resume
          </li>

          <li onClick={() => handleClick("contact")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Mail size={18} /> Contact
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            
            <li onClick={() => handleClick("home")} className="flex items-center gap-2 cursor-pointer">
              <Home size={18} /> Home
            </li>

            <li onClick={() => handleClick("skills")} className="flex items-center gap-2 cursor-pointer">
              <User size={18} /> Skillset
            </li>

            <li onClick={() => handleClick("projects")} className="flex items-center gap-2 cursor-pointer">
              <Folder size={18} /> Projects
            </li>

            <li onClick={() => handleClick("resume")} className="flex items-center gap-2 cursor-pointer">
              <FileText size={18} /> Resume
            </li>

            <li onClick={() => handleClick("contact")} className="flex items-center gap-2 cursor-pointer">
              <Mail size={18} /> Contact
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;