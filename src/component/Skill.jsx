import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  //   FaPhp,
  FaPython,
} from "react-icons/fa";
import {
  SiSass,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiPostman,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";
import Tools from "./common/Tools";
import { Home, User } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Shadcn", icon: <Home /> },
  {name:"Material UI", icon: <User />}, 
];

const Skills = () => {
  return (
    <>
      <section className="bg-[#f5f5f5] py-20 px-6 md:px-20">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
          Professional <span className="text-red-600">Skillset</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-black">{skill.icon}</div>
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f5f5] py-20 px-6 md:px-20">
        <Tools />
      </section>
    </>
  );
};

export default Skills;
