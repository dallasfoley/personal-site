"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const links = ["", "About", "Projects", "Contact"];

const NavBar = () => {
  const [active, setActive] = useState("");

  // Effect to load the initial state from localStorage only on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedActive = localStorage.getItem("active") || "";
      setActive(savedActive);
    }
  }, []); // Empty dependency array to run only once on mount

  // Separate effect to save to localStorage whenever `active` changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("active", active);
    }
  }, [active]); // Depend on `active` to update localStorage when it changes

  return (
    <nav
      className="flex fixed justify-center md:justify-between items-center w-full h-10 
    bg-gradient-to-l from-slate-200 to-blue-300 z-10"
    >
      <span className="w-2/3 h-10 hidden md:flex md:justify-start md:items-center">
        <FontAwesomeIcon
          icon={faCode}
          color="blue"
          height={30}
          width={30}
          className="ml-5 text-4xl"
        />
        <h1 className="text-3xl font-bold text-blue-600 m-5">Dallas Foley</h1>
      </span>
      <div className="w-full md:w-1/3 flex justify-end">
        {links.map((link, key) => (
          <Link
            href={`/${link.toLowerCase()}`}
            key={key}
            onClick={() => setActive(link.toLowerCase())}
          >
            <h2
              className="text-blue-400 font-bold text-md md:text-xl m-3 md:m-5 transition duration-300 
        ease-in-out hover:text-red-500 hover:scale-110"
            >
              {active === link.toLowerCase() ? (
                link === "" ? (
                  <p className="text-red-500">Home</p>
                ) : (
                  <p className="text-red-500">{link}</p>
                )
              ) : link === "" ? (
                <p>Home</p>
              ) : (
                <p>{link}</p>
              )}
            </h2>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
