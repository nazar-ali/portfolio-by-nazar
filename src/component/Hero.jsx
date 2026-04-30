import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { SocialIcon } from "./common/social";


const Hero = () => {
  return (
    <>
    <section className="relative h-screen bg-[#f5efe6] overflow-hidden">
      
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[180px] font-extrabold text-red-600 opacity-90 tracking-tight z-0">
        WELCOME
      </h1>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 max-w-xl">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Hi There! 👋
        </h2>

        <h3 className="mt-4 text-4xl md:text-6xl font-bold">
          I'M <span className="text-black">Nazar Ali</span>
        </h3>

        <p className="mt-4 text-lg text-gray-700">
          Frontend Developer & React Specialist
        </p>

        {/* Button */}
        <button className="mt-6 w-fit px- py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          View Portfolio
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-50 bottom-0 z-10">
        <img
          src="/images/image.png" // put image in public folder
          alt="profile"
          className="h-[90vh] object-contain "
        />
      </div>

      {/* RED NAME TAG */}
      <div className="absolute right-20 bottom-40 bg-red-600 text-white px-6 py-3 text-2xl font-bold rotate-[-2deg] z-20">
        NAZAR
      </div>

      <div className="absolute right-10 bottom-28 bg-black text-white px-6 py-3 text-3xl font-bold rotate-[2deg] z-20">
        ALI
      </div>

      {/* EXTRA TEXT */}
      <div className="absolute left-20 bottom-20 text-[100px] font-black text-black opacity-90 z-0">
        Full Stack Developer
      </div>
    </section>
      <section className="bg-[#f5f5f5] py-20 px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16">
        LET ME <span className="text-red-600">INTRODUCE</span> MYSELF
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          
          <p>
            Hi, my name is{" "}
            <span className="text-red-600 font-medium">Nazar Ali</span> and I'm from{" "}
            <span className="text-red-600 font-medium">Pakistan</span>.
          </p>

          <p>
            I am currently a student and a frontend developer passionate about building modern web applications.
          </p>

          <p>
            I am proficient in{" "}
            <span className="text-red-600">
              React, Next.js, JavaScript, Tailwind CSS, Node.js, MongoDB
            </span>{" "}
            and also have experience with backend development and APIs.
          </p>

          <p>
            I have a passion for working with{" "}
            <span className="text-red-600 font-medium">
              modern JavaScript frameworks
            </span>{" "}
            like React and building scalable applications.
          </p>

          <p>
            I am also interested in{" "}
            <span className="text-red-600 italic">
              Artificial Intelligence
            </span>{" "}
            and learning new technologies.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/coding-vibe.png" // put your image in public folder
            alt="about"
            className="w-[400px] md:w-[500px]"
          />
        </div>
      </div>
    </section>
    <section className="bg-[#f5f5f5] py-20 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        FIND ME ON
      </h2>

      <p className="text-gray-700 mb-10">
        Please don't hesitate to reach out to me and{" "}
        <span className="text-red-600">connect</span>.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 flex-wrap">
        
      <SocialIcon link="https://github.com/nazar-ali">
          <FaGithub size={20} />
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/mnazarali">
          <FaLinkedinIn size={20} />
        </SocialIcon>

      </div>
    </section>
     
    </>
  );
};

export default Hero;