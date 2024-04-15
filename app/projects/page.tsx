import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

const URLs = [
  ["/", "/portfolio2.png"],
  ["https://github.com/dallasfoley/ActionSudokuGame", "/sudoku.png"],
  ["https://github.com/dallasfoley/CanadianExperience", "/canadien2.png"],
  ["https://github.com/dallasfoley/GraphADTImplementation", "/graph.png"],
];

const page = () => {
  return (
    <div className="m-0 h-screen w-full flex flex-col items-center justify-around">
      <h1 className="text-6xl text-blue-400 my-16">Projects</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-20 m-20">
        {URLs.map((url, key) => (
          <Link href={url[0]} key={key}>
            <Image
              src={url[1]}
              alt="img"
              width={400}
              height={400}
              className="rounded-xl transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
