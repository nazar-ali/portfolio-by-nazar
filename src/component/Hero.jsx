import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SocialIcon } from "./common/social";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-[#f5efe6] overflow-hidden flex flex-col justify-center">

        {/* BIG BACKGROUND TEXT */}
        <h1 className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 text-[120px] lg:text-[180px] font-extrabold text-red-600 opacity-20 z-0">
          WELCOME
        </h1>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-10">

          {/* LEFT TEXT */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-4xl mt-10 font-semibold">
              Hi There! 👋
            </h2>

            <h3 className="mt-3 text-3xl md:text-6xl font-bold">
              I'M <span className="text-black">Nazar Ali</span>
            </h3>

            <p className="mt-3 text-base md:text-lg text-gray-700">
              Frontend Developer & React Specialist
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
           <img
  src="/images/image.png"
  alt="profile"
  className="w-[600px] max-w-[400px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-contain mx-auto"
/>

            {/* NAME TAGS */}
            <div className="absolute right-0 bottom-20 bg-red-600 text-white px-4 py-2 text-lg md:text-2xl font-bold rotate-[-2deg]">
              NAZAR
            </div>

            <div className="absolute right-0 bottom-10 bg-black text-white px-4 py-2 text-xl md:text-3xl font-bold rotate-[2deg]">
              ALI
            </div>
          </div>
        </div>

        {/* PORTFOLIO TEXT */}
        <div className="hidden md:block absolute left-10 bottom-10 text-[60px] lg:text-[100px] font-black text-black opacity-10">
          Portfolio
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">
          LET ME <span className="text-red-600">INTRODUCE</span> MYSELF
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed">
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
          <div className="flex justify-center">
            <img
              src="/images/coding-vibe.png"
              alt="about"
              className="w-[250px] md:w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="bg-[#f5f5f5] py-16 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          FIND ME ON
        </h2>

        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Please don't hesitate to reach out and{" "}
          <span className="text-red-600">connect</span>.
        </p>

        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <SocialIcon link="https://github.com/nazar-ali">
            <FaGithub size={18} />
          </SocialIcon>

          <SocialIcon link="https://www.linkedin.com/in/mnazarali">
            <FaLinkedinIn size={18} />
          </SocialIcon>
        </div>
      </section>
    </>
  );
};

export default Hero;