import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faCss3,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
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
        <p className="text-blue-600 text-center text-2xl my-7">
          Programming Languages
        </p>
        <div className="flex justify-around items-center">
          <SiJavascript color="black" size="1/2x" className="mx-10 h-12" />
          <SiTypescript color="black" size="1/2x" className="mx-10 h-12" />
          <h1 className="text-2xl text-black font-bold mx-10">C/C++</h1>
          <FontAwesomeIcon
            icon={faPython}
            color="black"
            size="3x"
            className="mx-10"
          />
        </div>
      </div>
      <div>
        <p className="text-blue-600 t text-center text-2xl my-7">
          Markup/Styling Languages
        </p>
        <div className="flex justify-around items-center">
          <h1 className="text-2xl text-black font-bold mx-10">JSX/TSX</h1>
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
          <SiTailwindcss color="black" size="1/2" className="mx-10 h-12" />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-2xl my-7">
          Libraries, Frameworks and Technologies
        </p>

        <div className="flex justify-around items-center mb-3 text-2xl text-black font-bold mx-10">
          <FaReact color="black" size="2x" className="mx-10" />
          <SiNextdotjs color="black" size="2x" className="mx-10" />
          <FaGitAlt color="black" size="2x" className="mx-10" />
          <SiVite color="black" size="2x" className="mx-10" />
          <h1 className="mx-10">Vercel</h1>
          <SiLatex color="black" size="2x" className="mx-10" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
