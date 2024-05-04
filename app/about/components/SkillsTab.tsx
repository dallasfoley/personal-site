import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiLatex,
  SiVercel,
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";

const SkillsTab = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl mb-7">
          Programming Languages
        </p>
        <div
          className="grid grid-cols-4 text-2xl md:text-3xl 
        lg:text-5xl gap-5  md:gap-10"
        >
          <SiJavascript color="black" className="" />
          <SiTypescript color="black" className="" />
          <h1 className="text-sm md:text-xl lg:text-2xl text-black font-bold flex items-center justify-center">
            C/C++
          </h1>
          <FontAwesomeIcon icon={faPython} color="black" className="" />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Markup/Styling Languages
        </p>
        <div className="grid grid-cols-3 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl">
          <FontAwesomeIcon icon={faHtml5} color="black" />

          <FontAwesomeIcon icon={faCss3} color="black" />
          <SiTailwindcss color="black" />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Libraries, Frameworks and Technologies
        </p>

        <div
          className="grid grid-cols-6 text-2xl md:text-3xl 
          lg:text-5xl w-full md:gap-10 text-black font-bold mx-10"
        >
          <FaReact color="black" className="" />
          <SiNextdotjs color="black" className="" />
          <FaGitAlt color="black" className="" />
          <SiVite color="black" className="" />
          <SiVercel color="black" />
          <SiLatex color="black" className="" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
