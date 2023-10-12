import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Courses from "./Courses";
import Papers from "./Papers";
import Gallery from "./Gallery";
import Feedback from "./Feedback";
import Contactus from "./Contactus";

const Homepg = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Courses />
      <Papers />

      <Gallery />
      <Feedback />
      <Contactus />
    </div>
  );
};

export default Homepg;
