"use client";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import { FormEvent } from "react";

const links = [
  "https://github.com/dallasfoley",
  "https://www.linkedin.com/",
  "https://www.instagram.com/dallastfoley/",
];

const icons = [
  <GitHubIcon key={1} style={{ fontSize: "60px" }} />,
  <LinkedInIcon key={2} style={{ fontSize: "60px" }} />,
  <InstagramIcon key={3} style={{ fontSize: "60px" }} />,
];

const page = () => {
  return (
    <div className="flex">
      <div className="h-screen m-0 basis-1/2 flex flex-col justify-center items-center text-black text-4xl">
        <div className="flex flex-row items-center">
          <EmailIcon style={{ fontSize: "40px" }} />
          <p className="ml-5"> dallastfoley@gmail.com</p>
        </div>
        <div className="flex flex-row m-5 items-center">
          <PhoneIcon style={{ fontSize: "40px" }} />
          <p className="ml-5"> (248)-962-5493</p>
        </div>
        <div className="flex justify-around">
          {icons.map((icon, key) => (
            <Link
              href={links[key]}
              key={key}
              className="m-5 mt-10 text-4xl text-white transition duration-500 
          ease-in-out hover:text-red-500 hover:-translate-y-3"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-screen m-0 basis-1/2 flex flex-col justify-around items-center">
        <h1 className="text-5xl text-blue-400 font-bold mt-10">Contact Me</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="h-screen m-0 basis-2/3 flex flex-col justify-around items-center"
        >
          <input
            type="hidden"
            name="access_key"
            value="a1b887f5-ca7e-4942-84d9-2879b248c238"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            className="h-20 w-96 rounded-3xl my-5"
          />
          <input
            type="text"
            name="email"
            placeholder="Your email..."
            className="h-20 w-96 rounded-3xl my-5"
          />
          <input
            type="text"
            name="message"
            placeholder="Your message..."
            className="h-64 w-96 rounded-3xl my-5"
          />
          <button
            type="submit"
            className="h-20 w-20 rounded-3xl bg-slate-700 transition duration-300 
        ease-in-out hover:bg-red-500 hover:scale-110"
          >
            <SendIcon style={{ fontSize: "40px", color: "white" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
