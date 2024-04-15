import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const links = [
  "https://github.com/dallasfoley",
  "https://www.linkedin.com/",
  "https://www.instagram.com/dallastfoley/",
  "/",
];

const icons = [
  <GitHubIcon key={1} style={{ fontSize: "100px" }} />,
  <LinkedInIcon key={2} style={{ fontSize: "100px" }} />,
  <InstagramIcon key={3} style={{ fontSize: "100px" }} />,
  <EmailIcon key={4} style={{ fontSize: "100px" }} />,
];

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl text-blue-600 font-bold mt-20 mb-10">
        Hi, I`m Dallas
      </h1>
      <h1 className="text-4xl text-blue-600 font-bold mt-10 mb-20">
        Frontend Developer
      </h1>
      <div className="flex justify-around">
        {icons.map((icon, key) => (
          <Link
            href={links[key]}
            key={key}
            className="m-5 mt-10 text-7xl text-white transition duration-500 
          ease-in-out hover:text-red-500 hover:-translate-y-3"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
