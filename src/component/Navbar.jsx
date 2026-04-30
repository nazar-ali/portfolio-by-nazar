import React from "react";
import { Home, User, Folder, FileText, Mail } from "lucide-react";

const Navbar = ({ setActivePage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-12 bg-gray-200 flex items-center justify-center font-bold text-xl">
            Nazar
          </div>
        </div>

        {/* MENU */}
        <ul className="flex items-center gap-8 text-gray-800 font-medium">
          <li onClick={() => setActivePage("home")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Home size={18} />
            Home
          </li>

          <li onClick={() => setActivePage("skills")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <User size={18} />
            Skillset
          </li>

          <li onClick={() => setActivePage("projects")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Folder size={18} />
            Projects
          </li>

          <li onClick={() => setActivePage("resume")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <FileText size={18} />
            Resume
          </li>

          <li onClick={() => setActivePage("contact")} className="flex items-center gap-2 cursor-pointer hover:text-black">
            <Mail size={18} />
            Contact Me
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;