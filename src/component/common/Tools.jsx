import React from "react";
import {
//   SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGit,
  SiFigma,
  SiIntellijidea,
  SiPycharm,
  SiDocker,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
const tools = [
  { name: "VS Code", icon: <FaCode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify /> },

  { name: "Git Tools", icon: <SiGit /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { name: "PyCharm", icon: <SiPycharm /> },

  { name: "Docker", icon: <SiDocker /> },
];

const Tools = () => {
  return (
    <section className="bg-[#f5f5f5] py-0 px-6 md:px-5">
      
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
        <span className="text-red-600">Tools</span> I use
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="text-4xl mb-4 text-black">
              {tool.icon}
            </div>

            <p className="text-gray-700 font-medium text-center">
              {tool.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Tools;