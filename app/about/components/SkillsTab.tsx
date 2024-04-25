import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiLatex,
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";

const SkillsTab = () => {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl mb-7">
          Programming Languages
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          <SiJavascript color="black" size="1/2x" className=" h-12" />
          <SiTypescript color="black" size="1/2x" className=" h-12" />
          <h1 className="text-3xl text-black font-bold flex items-center justify-center">
            C/C++
          </h1>
          <FontAwesomeIcon
            icon={faPython}
            color="black"
            size="3x"
            className=""
          />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Markup/Styling Languages
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          <h1 className="text-3xl text-black font-bold flex items-center justify-center">
            JSX/TSX
          </h1>
          <FontAwesomeIcon
            icon={faHtml5}
            color="black"
            size="3x"
            className="mx-10"
          />

          <FontAwesomeIcon
            icon={faCss3}
            color="black"
            size="3x"
            className="mx-10"
          />
          <SiTailwindcss color="black" size="1/2" className=" h-12" />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Libraries, Frameworks and Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-16 mb-3 text-2xl text-black font-bold mx-10">
          <FaReact color="black" className="text-6xl" />
          <SiNextdotjs color="black" className="text-6xl" />
          <FaGitAlt color="black" className="text-6xl" />
          <SiVite color="black" className="text-6xl" />
          <h1 className="flex items-center justify-center text-3xl">Vercel</h1>
          <SiLatex color="black" size="2x" className="text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
