import React from "react";
import cbse from "../../cbse.png";
import jac from "../../jacf.jpg";
import ap from "../../ap.jpg";
import icse from "../../icse.jpg";
import logo from "../../logo final.png";

const Exampaper = () => {
  return (
    <>
      <div name="Exam Papers" className="pt-10 mb-[10%]">
        <a href="/">
          <div className="sm:w-60 w-20 ml-10 -mt-5 ">
            <img src={logo} alt="logo" />
          </div>
        </a>

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
            <h3 className="bg-cyan-400 rounded-md w-32 h-7 text-center mt-2 text-xl no-underline cursor-pointer hover:bg-orange-600 animate-bounce">
              {" "}
              CBSE
            </h3>
          </a>

          <a href="/jac" className="no-underline text-white">
            <h3 className="bg-cyan-400 rounded-md w-32 h-7 text-center mt-2 text-xl cursor-pointer hover:bg-red-800 animate-bounce">
              {" "}
              JAC
            </h3>
          </a>

          <a href="/bseap" className="no-underline text-white">
            <h3 className="bg-cyan-400 rounded-md w-32 h-7 text-center mt-2  text-xl cursor-pointer hover:bg-red-500 animate-bounce">
              {" "}
              BSEAP
            </h3>
          </a>

          <a href="/icse" className="no-underline text-white">
            <h3 className="bg-cyan-400 rounded-md w-32 h-7 text-center mt-2  text-xl cursor-pointer hover:bg-yellow-400 animate-bounce">
              {" "}
              ICSE
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default Exampaper;
