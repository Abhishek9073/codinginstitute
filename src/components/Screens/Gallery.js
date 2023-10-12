import React from "react";

import img1 from "../../picone.png";
import img2 from "../../pictwo.png";
import img3 from "../../picthree.jpeg";
import img4 from "../../picfour.jpeg";
import img5 from "../../picfive.jpeg";
import img6 from "../../picthree.png";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div name="Gallery" className="pt-10 mb-10 border-t-2 border-cyan-100 ">
     <div className="flex  items-center justify-center border-t-2 border-cyan-100 pt-4 pb-4 max-md:pt-2 ">
        <h1
          className="
    w-32 h-10 font-semibold text-center 
     cursor-pointer underline duration-300 pb-10 text-3xl text-red-700  hover:text-white  hover:scale-100 hover:bg-black hover:rounded-md 
        "
        >
          
            Gallery
     
        </h1>
      </div>
      <div className="flex flex-row ">
        <Marquee>
          <img
            src={img5}
            alt="img"
            className=" h-96 w-60 max-sm:w-20 max-sm:h-40 border-white rounded-lg border-1"
          />

          <img
            src={img2}
            alt="img"
            className="h-96 w-60  max-sm:w-20 max-sm:h-40 border-white rounded-lg border-1"
          />
          <img
            src={img3}
            alt="img"
            className="h-96 w-100  max-sm:w-20 max-sm:h-40  border-white rounded-lg border-1"
          />
          <img
            src={img6}
            alt="img"
            className="h-96 w-60  max-sm:w-20 max-sm:h-40  border-white rounded-lg border-1"
          />

          <img
            src={img4}
            alt="img"
            className="h-96 w-100  max-sm:w-20 max-sm:h-40 border-white rounded-lg border-1"
          />
          <img
            src={img1}
            alt="img"
            className="h-96 w-60  max-sm:w-20 max-sm:h-40  border-white rounded-lg border-1"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
