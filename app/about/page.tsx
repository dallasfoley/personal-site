"use client";

import { useState } from "react";
import AboutTab from "./components/AboutTab";
import EducationTab from "./components/ExperienceTab";
import SkillsTab from "./components/SkillsTab";

const About = () => {
  const [active, setActive] = useState("about");

  return (
    <div className="m-0 h-screen w-full flex flex-col items-center justify-center px-4 md:px-10">
      <h1 className="text-6xl text-blue-400 font-bold mt-10 mb-5">About Me</h1>

      <div
        className="w-96 md:w-4/5 lg:w-3/5 rounded-2xl my-8 flex flex-col justify-between"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex justify-around items-start text-white text-3xl m-5">
          <button
            className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-xl md:text-3xl
             transition duration-300 ease-in-out hover:text-red-500 hover:scale-110"
            onClick={() => setActive("about")}
          >
            {active === "about" ? (
              <h3 className="text-red-500">About</h3>
            ) : (
              <h3>About</h3>
            )}
          </button>
          <button
            className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-xl md:text-3xl
             transition duration-300 ease-in-out hover:text-red-500 hover:scale-110"
            onClick={() => setActive("skills")}
          >
            {active === "skills" ? (
              <h3 className="text-red-500">Skills</h3>
            ) : (
              <h3>Skills</h3>
            )}
          </button>
          <button
            className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 text-xl md:text-3xl
             transition duration-300 ease-in-out hover:text-red-500 hover:scale-110"
            onClick={() => setActive("experience")}
          >
            {active === "experience" ? (
              <h3 className="text-red-500">Experience</h3>
            ) : (
              <h3>Experience</h3>
            )}
          </button>
        </div>
        <div className="w-full max-w-4xl mx-auto rounded-2xl p-4 bg-white bg-opacity-10 shadow-lg">
          {active === "about" && <AboutTab />}
          {active === "experience" && <EducationTab />}
          {active === "skills" && <SkillsTab />}
        </div>
      </div>
    </div>
  );
};

export default About;
