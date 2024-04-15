const ExperienceTab = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex flex-col justify-around text-white text-xl m-5">
        <h1 className="text-blue-400 font-bold text-center mb-7">Education</h1>
        <p className="my-5">
          Bachelor of Science, Mathematics | Minor in Computer Science -
          Michigan State <br /> University, Graduated 2023
        </p>
        <p className="my-5">Novi High School, Graduated 2019</p>
      </div>
      <div className="flex flex-col justify-around text-white text-xl">
        <h1 className="text-blue-400 font-bold text-center mt-8 mb-5">Work</h1>
        <div className="m-5">
          <h1 className="m-2">Aug. 2022 - Dec. 2023</h1>
          <p>
            Undergraduate Lecture Assistant at Michigan State University, East
            Lansing, MI
          </p>
        </div>
        <div className="m-5">
          <h1 className="m-2">March 2021 - April 2022</h1>
          <p>Server at Sushiya, East Lansing, MI</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
