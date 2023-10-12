import React from "react";
import webdes from "../../course 1.png";
import java from "../../course 2.png";
import python from "../../course 3.png";
import cplus from "../../course 4.png";
import database from "../../course 5.png";
import schools from "../../course 6.png";
import mca from "../../MCA.png";
import bca from "../../BCA.png";
import Marquee from "react-fast-marquee";

const Courses = () => {
  return (
    <div  className=" max-md:pt-4 pt-10 border-t-2 border-cyan-100">
      <div className="flex  items-center justify-center  ">
        <h1
          className="sm:max-md:mb-2 
    w-32 h-10 font-semibold text-center 
    cursor-pointer    hover:scale-100 hover:bg-black hover:rounded-md duration-300 mt-8 underline text-3xl text-red-500 
        "
        >
          <a href="/course" className=" text-red-700  hover:text-white duration-300">
            Courses
          </a>
        </h1>
      </div>

      <div className=" overflow-hidden     rounded-xl mt-5 ">
        <Marquee direction="right">
          <img
            src={webdes}
            alt="webdes"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />
          <img
            src={java}
            alt="java"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg  mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />

          <img
            src={python}
            alt="python"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg   mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />

          <img
            src={cplus}
            alt="cplus"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />

          <img
            src={database}
            alt="database"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />

          <img
            src={schools}
            alt="schools"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg  mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />
          <img
            src={bca}
            alt="bca"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg  mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />

          <img
            src={mca}
            alt="mca"
            className="max-sm:h-24 w-30  w-30 h-30 max-sm:rounded-lg mx-2 rounded-3xl sm:max-md:rounded-lg border-sky-300 border-2"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Courses;
