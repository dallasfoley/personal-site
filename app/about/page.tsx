"use client";

import { useState } from "react";
import AboutTab from "./components/AboutTab";
import EducationTab from "./components/ExperienceTab";
import SkillsTab from "./components/SkillsTab";

const About = () => {
  const [active, setActive] = useState("about");

  return (
    <div className="m-0 h-screen w-full flex flex-col items-center justify-around">
      <h1 className="text-6xl text-blue-400 mt-10">About Me</h1>
      <div
        className="w-3/5 rounded-2xl my-16 flex flex-col justify-between"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex justify-around items-start text-white text-3xl m-5">
          <button onClick={() => setActive("about")}>
            {active === "about" ? (
              <h3
                className="text-red-500 transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                About
              </h3>
            ) : (
              <h3
                className="transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                About
              </h3>
            )}
          </button>
          <button onClick={() => setActive("skills")}>
            {active === "skills" ? (
              <h3
                className="text-red-500 transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                Skills
              </h3>
            ) : (
              <h3
                className="transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                Skills
              </h3>
            )}
          </button>
          <button onClick={() => setActive("experience")}>
            {active === "experience" ? (
              <h3
                className="text-red-500 transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                Experience
              </h3>
            ) : (
              <h3
                className="transition duration-300 
              ease-in-out hover:text-red-500 hover:scale-110"
              >
                Experience
              </h3>
            )}
          </button>
        </div>
        {active === "about" && <AboutTab />}
        {active === "experience" && <EducationTab />}
        {active === "skills" && <SkillsTab />}
      </div>
    </div>
  );
};

export default About;
