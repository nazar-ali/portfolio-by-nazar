import { SocialIcon } from "./common/social";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="bg-gray-500 text-white py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-md font-bold text-center">
          Bachelor of Computer Science Graduate | Frontend Developer
        </p>

        {/* Center Copyright */}
        <p className="text-xxl font-bold text-center">
          Copyright © 2026
        </p>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-lg">
        <SocialIcon className="w-10 h-10  " link="https://github.com/nazar-ali">
          <FaGithub size={20} />
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/mnazarali">
          <FaLinkedinIn size={20} />
        </SocialIcon>
        
        </div>
      </div>
    </footer>
    );
};

export default Footer;