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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Explicitly cast event.target to HTMLFormElement
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      formData.append("access_key", "a1b887f5-ca7e-4942-84d9-2879b248c238");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log("Submission successful:", result);
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex">
      <div className="h-screen m-0 basis-1/2 flex flex-col justify-center items-center text-white text-4xl">
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
          onSubmit={(e) => handleSubmit(e)}
          className="h-screen m-0 basis-2/3 flex flex-col justify-around items-center"
        >
          <input
            type="text"
            placeholder="Your name..."
            className="h-20 w-96 rounded-3xl my-5"
          />
          <input
            type="text"
            placeholder="Your email..."
            className="h-20 w-96 rounded-3xl my-5"
          />
          <input
            type="text"
            placeholder="Your message..."
            className="h-64 w-96 rounded-3xl my-5"
          />
          <button className="h-20 w-20 rounded-3xl bg-slate-700">
            <SendIcon style={{ fontSize: "40px", color: "white" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
