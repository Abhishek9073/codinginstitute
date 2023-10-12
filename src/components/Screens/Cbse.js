import React from "react";

const Cbse = () => {
  return (
    <div>
      <div className="bg-cyan-400 h-10 w-56 text-center rounded-2xl items-center text-xl justify-around mt-12 ml-44 text-white font-semibold">
        <a href="/class11modelpdf.pdf" download={true}>
          Class 11 Mock Paper 1
        </a>
      </div>

      <div className="bg-pink-400 h-10 w-56 text-center rounded-2xl items-center text-xl justify-around mt-12 ml-44 text-white font-semibold">
        Class 11 Mock Paper 2
      </div>
      <div className="bg-green-400 h-10 w-56 text-center rounded-2xl items-center text-xl justify-around mt-12 ml-44 text-white font-semibold">
        Class 11 Mock Paper 3
      </div>
      <div className="bg-red-400 h-10 w-56 text-center rounded-2xl items-center text-xl justify-around mt-12 ml-44 text-white font-semibold">
        Class 11 Mock Paper 4
      </div>
      <div className="bg-yellow-400 h-10 w-56 text-center rounded-2xl items-center text-xl justify-around mt-12 ml-44 text-white font-semibold">
        Class 11 Mock Paper 5
      </div>
    </div>
  );
};

export default Cbse;
