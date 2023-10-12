import React from "react";
import webdes from "../../course 1.png";
import java from "../../course 2.png";
import python from "../../course 3.png";
import cplus from "../../course 4.png";
import database from "../../course 5.png";
import schools from "../../course 6.png";
import mca from "../../MCA.png";
import bca from "../../BCA.png";
import logo from "../../logo final.png";

const Coursespg = () => {
  return (
    <div name="Courses" className="text-pink-600 underline">
      <h1 className="text-center">----Our Courses---- </h1>
      <a href="/courses">
        <div className="sm:w-60 w-20 ml-10 -mt-12 ">
          <img src={logo} alt="logo" />
        </div>
      </a>
      <div className=" grid grid-cols-4 gap-3 rounded-3xl m-[3%]">
        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={webdes}
          alt="webdes"
        />
        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={java}
          alt="java"
        />

        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={python}
          alt="python"
        />

        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={cplus}
          alt="cplus"
        />

        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={database}
          alt="database"
        />
        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={mca}
          alt="mca"
        />

        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={bca}
          alt="bca"
        />
        <img
          className="rounded-xl hover:scale-105 duration-500 cursor-pointer"
          src={schools}
          alt="bca"
        />
      </div>
    </div>
  );
};

export default Coursespg;
