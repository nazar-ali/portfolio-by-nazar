import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const projects = [
  {
    title: "Carbarton",
    image: "/images/carbarton-2.png", // put your image in public/projects
    description:
      "Cabarton is a modern, mobile-responsive voting platform built using Vite, React.js, and Tailwind CSS, focused on performance and clean UI design. It allows users to compare product designs, vote seamlessly, and view real-time results through an intuitive and responsive interface.",
    github: "https://github.com/nazar-ali",
    demo: "https://carbarton-web.vercel.app/",
  },
  {
    title: "Pig Game",
    image: "/images/pig-game.png", // put your image in public/projects
    description: "Pig Game is a simple two-player dice game where rolling adds points, but rolling a 1 resets your turn. First player to reach 100 wins by holding their score.",
    github: "https://github.com/nazar-ali/pig-game",
    demo: "https://pig-game-rho-ebon.vercel.app",
  },
  {
    title: "Ecommerce Website",
    image: "/images/ecomerce.png", // put your image in public/projects
    description:
      "A full-featured e-commerce website built with modern web technologies, featuring product listings, shopping cart functionality, and a seamless checkout process.",
    github: "https://github.com/yourusername/ecommerce-project",
    demo: "https://ecommerce-system-three-ruby.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section  id="projects" className="bg-[#f5f5f5] py-20 px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
        My <span className="text-red-600">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <img
            id={index}
              src={project.image} // put your image in public/projects
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            {/* Content */}
            <div className="p-6 text-center">       
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <MdOpenInNew />
                    Demo
                  </a>
                )}

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;