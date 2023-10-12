import React from "react";
import cbse from "../../cbse.png";
import jac from "../../jacf.jpg";
import ap from "../../ap.jpg";
import icse from "../../icse.jpg";

const Papers = () => {
  return (
    <div name="Exam Papers" className=" max-md:pt-4 pt-10  mb-10">
      <div className="flex  items-center justify-center border-t-2 border-cyan-100 mt-5 max-md:pt-2 ">
        <h1
          className="
    w-48 h-10 font-semibold text-center 
     cursor-pointer duration-300 mt-8 text-3xl  hover:scale-100 hover:bg-black hover:rounded-md 
        "
        >
          <a href="/exampaper" className=" text-red-700  hover:text-white duration-300">
            Exam Papers
          </a>
        </h1>
      </div>

      <div className="flex flex-row w-full bg-white justify-around mt-5">
        <div>
          <a href="/cbse">
            <img
              src={cbse}
              alt="cbse"
              className="object-cover w-56 cursor-pointer hover:scale-105 duration-500"
            />
          </a>
        </div>

        <div>
          <a href="/jac">
            <img
              src={jac}
              alt="jac"
              className="object-cover w-64 cursor-pointer hover:scale-105 duration-500"
            />
          </a>
        </div>

        <div>
          <a href="/bseap">
            <img
              src={ap}
              alt="ap"
              className="object-cover w-56 only:cursor-pointer hover:scale-105 duration-500"
            />
          </a>
        </div>

        <div>
          <a href="/icse">
            <img
              src={icse}
              alt="icse"
              className="object-cover w-64 cursor-pointer hover:scale-105 duration-500"
            />
          </a>{" "}
        </div>
      </div>

      <div className="flex flex-row justify-around font-thin text-center  text-white mt-1">
        <a href="/cbse" className="no-underline text-white">
          <h3 className="bg-cyan-400 rounded-md max-sm:w-20 max-sm:text-lg w-32 h-7 text-center mt-2 text-xl no-underline cursor-pointer hover:bg-orange-600 animate-bounce">
            {" "}
            CBSE
          </h3>
        </a>

        <a href="/jac" className="no-underline text-white">
          <h3 className="bg-cyan-400 rounded-md max-sm:w-20 max-sm:text-lg w-32 h-7 text-center mt-2 text-xl cursor-pointer hover:bg-red-800 animate-bounce">
            {" "}
            JAC
          </h3>
        </a>

        <a href="/bseap" className="no-underline text-white">
          <h3 className="bg-cyan-400 rounded-md max-sm:w-20 max-sm:text-lg w-32 h-7 text-center mt-2  text-xl cursor-pointer hover:bg-red-500 animate-bounce">
            {" "}
            BSEAP
          </h3>
        </a>

        <a href="/icse" className="no-underline text-white">
          <h3 className="bg-cyan-400 rounded-md max-sm:w-20 max-sm:text-lg w-32 h-7 text-center mt-2  text-xl cursor-pointer hover:bg-yellow-400 animate-bounce">
            {" "}
            ICSE
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Papers;
