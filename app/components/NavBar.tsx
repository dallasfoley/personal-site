import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-10 bg-gradient-to-l from-slate-200 to-blue-200">
      <span className="w-2/3 h-10 flex justify-start items-center">
        <FontAwesomeIcon
          icon={faCode}
          color="white"
          height={30}
          width={30}
          className="ml-5"
        />
        <h1 className="text-3xl font-bold text-white m-5">Dallas Foley</h1>
      </span>
      <div className="w-1/3 flex justify-end">
        <Link href="/">
          <h2 className="text-blue-400 font-bold text-xl m-5">Home</h2>
        </Link>
        <Link href="/about">
          <h2 className="text-blue-400 font-bold text-xl m-5">About</h2>
        </Link>
        <Link href="/projects">
          <h2 className="text-blue-400 font-bold text-xl m-5">Projects</h2>
        </Link>
        <Link href="/contact">
          <h2 className="text-blue-400 font-bold text-xl m-5">Contact</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
