"use client";

import { useState } from "react";
import AboutTab from "./components/AboutTab";
import EducationTab from "./components/EducationTab";
import SkillsTab from "./components/SkillsTab";

const About = () => {
  const [active, setActive] = useState("about");
  return (
    <div className="m-0 h-screen w-full flex flex-col items-center justify-around">
      <h1 className="text-6xl text-blue-400 mt-16">About Me</h1>
      <div
        className="h-3/5 w-3/5 rounded-2xl m-32 flex flex-col justify-around"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex justify-around items-start text-white text-3xl">
          <button onClick={() => setActive("about")}>
            <h3>About</h3>
          </button>
          <button onClick={() => setActive("skills")}>
            <h3>Skills</h3>
          </button>
          <button onClick={() => setActive("education")}>
            <h3>Education</h3>
          </button>
        </div>
        {active === "about" && <AboutTab />}
        {active === "education" && <EducationTab />}
        {active === "skills" && <SkillsTab />}
      </div>
    </div>
  );
};

export default About;
