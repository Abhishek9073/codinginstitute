import React from "react";
import Carousel from "react-bootstrap/Carousel";
import rev1 from "../../review1.png";
import rev2 from "../../review2.png";
import rev3 from "../../review3.png";

const Feedback = () => {
  return (
    <div name="Feedback" className="pt-10 mb-10 border-t-2 border-cyan-100">
    <div className="flex  items-center justify-center border-t-2 border-cyan-100 pt-4 pb-4 max-md:pt-2 ">
        <h1
          className="
    w-36 h-10 font-semibold text-center 
     cursor-pointer underline duration-300 pb-10 text-3xl text-red-700  hover:text-white  hover:scale-100 hover:bg-black hover:rounded-md 
        "
        >
          
            Feedback
     
        </h1>
      </div>

      <div className=" flex items-center justify-center ml-[20%] mr-[20%] max-sm:m-12 mt-10  ">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img src={rev1} alt="rev1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={rev2} alt="rev2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={rev3} alt="rev3" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
