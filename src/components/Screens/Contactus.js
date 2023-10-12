import React from "react";
import call from "../../phone-call.png";
import wssp from "../../whatsapp.png";
import gmail from "../../social.png";
import tele from "../../telegram.png";
import youtube from "../../youtube.png";
import fb from "../../facebook.png";
import insta from "../../instagram.png";
import playstore from "../../playstore.png";

const Contactus = () => {
  return (
    <div
      name="Contact Us"
      className="border-t-2 border-cyan-100 max-md:pt-4 pt-10 "
    >
      <div className="flex  items-center justify-center border-t-2 border-cyan-100 pt-4 pb-4 max-md:pt-2 ">
        <h1
          className="
    w-48 h-10 font-semibold text-center 
     cursor-pointer underline duration-300 pb-10 text-3xl text-red-700  hover:text-white  hover:scale-100 hover:bg-black hover:rounded-md 
        "
        >
          Contact Us
        </h1>
      </div>

      <div className="flex flex-row max-lg:flex lg:flex-col justify-around">
        <div className="">
          <div className="mb-5 mt-7">
            <h1 className="text-xl md:max-2xl:text-2xl text-black font-semibold text-center">
              {" "}
              Get In Touch
            </h1>
          </div>
          <form
            action="https://getform.io/f/fb99c7c7-4bd5-4520-ae34-3c5c04d69db7"
            method="POST"
          >
            <div className="mt-5 border-2 border-cyan-300 rounded-lg overflow-hidden">
              {" "}
              <input
                type="text"
                name="name"
                id=""
                placeholder="name"
                className="pl-2 lg:w-80 md:w-44 sm:w-24"
              />{" "}
            </div>
            <div className="mt-5 border-2 border-cyan-300 rounded-lg overflow-hidden">
              {" "}
              <input
                type="email"
                name="email"
                id=""
                placeholder="email"
                className="pl-2 lg:w-80 md:w-44 sm:w-24"
              />{" "}
            </div>

            <div className="mt-5 border-2 border-cyan-300 rounded-lg overflow-hidden">
              {" "}
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="message "
                className="pl-2 lg:w-80 md:w-44 sm:w-24"
              ></textarea>
            </div>

            <div className="cursor-pointer bg-cyan-500 border-2 hover:bg-pink-600 hover:border-cyan-400 duration-300 border-pink-500 text-white rounded-lg w-20 text-center mt-5 ">
              Send
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-xl md:max-2xl:text-2xl text-black  font-semibold text-center mb-5 mt-7">
            {" "}
            Our Location
          </h1>

          <div className="border-2 border-cyan-500 rounded-xl overflow-hidden">
            <iframe
              className="sm:w-64  md:w-80  h-96"
              title="codingaddamap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.625058705031!2d86.68518427408848!3d24.49844477816737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1170823121069%3A0x3c066df4af719f55!2sCoding%20Adda!5e0!3m2!1sen!2sin!4v1695665199053!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div>
            <p className="text-justify w-64 italic text-purple-500 font-semibold pt-2">
             Address: Bidhu Bhushan Sarkar Rd, Williams
              Town, Deoghar,Jharkhand Pin-814112
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:mt-16 lg:rounded-xl lg:h-64  lg:bg-cyan-100">
        <div className="mt-[28px] ml-36  w-100">
          <div className="flex flex-row ">
            <img src={call} alt="asde" className="w-9 my-2" />
            <h2 className="mt-3 ml-2 text-lg font-semibold">
              +91 76675 41596 / +91 91828 21564
            </h2>
          </div>
          <div className="flex flex-row">
            <img src={wssp} alt="asde" className="w-9 my-2" />
            <h2 className="mt-3 ml-2 text-lg font-semibold text-green-600">
              +91 76675 41596 / +91 89876 54186
            </h2>
          </div>

          <div className="flex flex-row">
            <img src={gmail} alt="asde" className="w-9 my-2" />
            <h2 className="mt-3 ml-3 text-lg cursor-pointer font-semibold text-red-600">
              {" "}
              <a
                className="no-underline text-red-600"
                href="mailto:contact@codingadda.in"
              >
                contact@codingadda.in
              </a>
            </h2>
          </div>

          <div className="flex flex-row">
            <img src={playstore} alt="asde" className="w-9 my-2" />
            <h2 className="mt-3 ml-3 none text-lg cursor-pointer font-semibold text-red-600">
              {" "}
              <a
                className="text-cyan-500 no-underline"
                href="https://play.google.com/store/apps/details?id=com.codingadda.betacodingadda&hl=en_US"
              >
                Download Our App
              </a>
            </h2>
          </div>
        </div>

        <div className="mt-44 justify-center sm:max-lg:justify-center items-center">
          <div className="flex flex-row justify-end items-center text-center">
            <div className="bg-cyan-500 border-2 border-pink-500 text-white rounded-lg items-center w-32 -mt-32 mr-72 text-center h-8">
              Social Links
            </div>
          </div>
          <div className="flex flex-row sm:max-lg:justify-center sm:max-lg:pb-12 sm:max-lg:mr-72">
            <div>
              <a href="https://www.youtube.com/@codingadda." target="blank">
                <img src={youtube} alt="linkss" className="w-7 mx-1" />
              </a>
            </div>

            <div>
              {" "}
              <a href="https://t.me/+oOqPQbYTfb42ZGVl" target="blank">
                <img
                  src={tele}
                  alt="linkss"
                  className="w-7 cursor-pointer mx-1"
                />
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/people/Coding-Adda/100092341893235/?mibextid=ZKlF025XJ6KyrSs8"
                target="blank"
              >
                <img src={fb} alt="linkss" className="w-7 mx-1" />
              </a>
            </div>

            <div>
              <img src={insta} alt="linkss" className="w-7 mx-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-500 w-screen">
        <h1 className="text-center font-medium  text-white text-xl">
          © 2023 Coding Adda. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Contactus;
