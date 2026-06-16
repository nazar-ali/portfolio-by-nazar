import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SocialIcon } from "./common/social";
import TypingText from "./common/Typingtext";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#f5efe6] overflow-hidden flex flex-col justify-center px-6 md:px-20">

        {/* BACKGROUND TEXT */}
        {/* <h1 className="absolute top-14 left-1/2 -translate-x-1/2 text-[60px] sm:text-[100px] md:text-[160px] font-extrabold text-red-600  z-0 text-center">
          WELCOME
        </h1> */}

         <div className="grid md:grid-cols-2 gap-4 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          
          <p className="text-gray-600 text-2xl  mt-20 font-bold tracking-wide">
           Hello, I'm 👋  
          </p>

          <h1 className="text-4xl text-red-500 sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Nazar Ali
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
            Associate Frontend Developer
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
            <TypingText />
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and high-performance web applications 
            using React, Next.js, and scalable frontend architectures.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
           
           <a
          href="/images/Nazar-SoftwareEngineer.pdf" // put your resume in public folder
          download
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
              Download Rsesume
            </a>
          </div>

          {/* SOCIALS */}
          {/* <div className="flex gap-4 justify-center md:justify-start pt-4">
            <SocialIcon link="https://github.com/nazar-ali">
              <FaGithub size={18} />
            </SocialIcon>

            <SocialIcon link="https://www.linkedin.com/in/mnazarali">
              <FaLinkedinIn size={18} />
            </SocialIcon>
          </div> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/image.png"
            alt="Nazar"
            className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />
        </div>
      </div>

        {/* NAME TAGS */}
        <div className="absolute right-4 md:right-20 bottom-32 md:bottom-40 bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 text-lg md:text-2xl font-bold rotate-[-2deg] z-20">
          NAZAR
        </div>

        <div className="absolute right-2 md:right-10 bottom-20 md:bottom-28 bg-black text-white px-4 py-2 md:px-6 md:py-3 text-xl md:text-3xl font-bold rotate-[2deg] z-20">
          ALI
        </div>

        {/* EXTRA TEXT */}
      
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#f5f5f5] py-16 md:py-20 px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12 md:mb-16">
          LET ME <span className="text-red-600">INTRODUCE</span> MYSELF
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT */}
          <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left">
            <p>
              Hi, my name is{" "}
              <span className="text-red-600 font-medium">Nazar Ali</span> and I'm from{" "}
              <span className="text-red-600 font-medium">Pakistan</span>.
            </p>

            <p>
              I am a fresh graduate and a  associate frontend developer passionate about building modern web applications.
            </p>

            <p>
              I am proficient in{" "}
              <span className="text-red-600 font-medium">
                React, Next.js, JavaScript, Tailwind CSS,Shadcn,Material UI Node.js, MongoDB
              </span>.
            </p>

            <p>
              I love working with{" "}
              <span className="text-red-600 font-medium">
                modern JavaScript frameworks
              </span>.
            </p>

            <p>
              I am also interested in{" "}
              <span className="text-red-600 italic">
                Artificial Intelligence
              </span>.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/coding-vibe.png"
              alt="coding"
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="bg-[#f5f5f5] py-16 md:py-20 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          FIND ME ON
        </h2>

        <p className="text-gray-700 mb-10 text-sm md:text-base">
          Please don't hesitate to reach out and{" "}
          <span className="text-red-600">connect</span>.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
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