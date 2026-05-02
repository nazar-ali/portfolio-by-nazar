import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="bg-[#f5f5f5] min-h-screen py-20 px-6 md:px-20">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-10">
        My <span className="text-red-600">Resume</span>
      </h2>

      {/* Download Button */}
      <div className="flex justify-center mb-10">
        <a
          href="/images/Associate_Software_Engineer.pdf" // put your resume in public folder
          download
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>

 
    <div>

    <img
      src="/images/cv.jpg"
      alt="Resume"
      className="w-full object-contain"
      />
      </div>

    </section>
  );
};

export default Resume;