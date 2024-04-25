"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

const URLs = [
  [
    "https://github.com/dallasfoley/PokeGames",
    "/poke.png",
    "PokeGames",
    "React.js, TypeScript, Vite, CSS",
    "https://pokegames0.netlify.app/",
  ],
  [
    "https://github.com/dallasfoley/personal-site",
    "/portfolio2.png",
    "Portfolio",
    "Next.js, React.js, TypeScript, Tailwind",
    "",
  ],
  [
    "https://github.com/dallasfoley/ActionSudokuGame",
    "/sudoku.png",
    "Action Sudoku",
    "C++ and CMake",
  ],
  [
    "https://github.com/dallasfoley/CanadianExperience",
    "/canadien2.png",
    "Canadian Experience",
    "C++ and CMake",
  ],
  [
    "https://github.com/dallasfoley/GraphADTImplementation",
    "/graph.png",
    "Graph ADT",
    "Python",
  ],
];

const page = () => {
  return (
    <div className="m-0 w-full min-h-screen flex flex-col items-center justify-around">
      <h1 className="text-6xl font-bold text-blue-400 my-16">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 m-20">
        {URLs.map((url, key) => (
          <div
            key={key}
            className="flex flex-col justify-between w-full items-center text-black text-2xl"
          >
            <Image
              src={url[1]}
              alt="img"
              width={400}
              height={400}
              className="w-full h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
               rounded-xl transform transition-transform duration-300 hover:scale-110"
            />
            <div
              className="flex flex-col justify-around items-center rounded-2xl w-full 
              h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-20"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p className="text-xl text-center md:text-3xl my-8">{url[2]}</p>
              <div className="flex flex-col justify-around items-center">
                <Link
                  className="transform transition-transform duration-300 hover:text-red-500 hover:scale-110 my-3"
                  href={url[0]}
                >
                  <Button variant="contained">
                    <p className="text-sm md:text-md">See on GitHub</p>{" "}
                  </Button>
                </Link>
                {url.length === 5 && (
                  <Link
                    href={url[4]}
                    className="transform transition-transform duration-300 hover:text-red-500 hover:scale-110 my-3"
                  >
                    <Button variant="contained">
                      <p className="text-sm md:text-md">See Site</p>
                    </Button>
                  </Link>
                )}
                <p className="text-center text-lg md:text-3xl my-3">
                  Tech Stack: {url[3]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
