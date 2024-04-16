import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faCss3,
  faHtml5,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const SkillsTab = () => {
  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div>
        <p className="text-blue-600 text-center text-2xl mb-7">
          Programming Languages
        </p>
        <div className="flex justify-around items-center">
          <FontAwesomeIcon
            icon={faJsSquare}
            color="black"
            size="2x"
            className="mx-10"
          />
          <h1 className="text-2xl text-black font-bold mx-10">C/C++</h1>
          <FontAwesomeIcon
            icon={faPython}
            color="black"
            size="2x"
            className="mx-10"
          />
        </div>
      </div>
      <div>
        <p className="text-blue-600 t text-center text-2xl mb-7">
          Markup/Styling Languages
        </p>
        <div className="flex justify-around items-center">
          <h1 className="text-2xl text-black font-bold mx-10">JSX/TSX</h1>
          <FontAwesomeIcon
            icon={faHtml5}
            color="black"
            size="2x"
            className="mx-10"
          />

          <FontAwesomeIcon
            icon={faCss3}
            color="black"
            size="2x"
            className="mx-10"
          />
          <h1 className="text-2xl text-black font-bold mx-10">Tailwind</h1>
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-2xl mb-7">
          Libraries, Frameworks and Technologies
        </p>

        <div className="flex justify-around items-center mb-3 text-2xl text-black font-bold mx-10">
          <h1 className="mx-10">React.js</h1>
          <h1 className="mx-10">Next.js</h1>
          <FontAwesomeIcon
            icon={faGit}
            color="black"
            size="2x"
            className="mx-10"
          />
          <h1 className="mx-10">Vite</h1>
          <h1 className="mx-10">Vercel</h1>
          <h1 className="mx-10">LaTeX</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
