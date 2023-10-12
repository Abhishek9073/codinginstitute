import React, {useState} from "react";
import logo from "../../logo final.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
  const[navi, setNavi] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Courses",
    },

    {
      id: 3,
      link: "Exam Papers",
    },
    {
      id: 4,
      link: "CS Projects",
    },
    {
      id: 5,
      link: "Contact Us",
    },
  ];
  return (
    <div
      name="Home"
      className="flex justify-between   mt-2 w-full  bg-white items-center   text-fuchsia-600"
    >
      <div className="w-32 md:max-2xl:w-60 ml-10  ">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex  flex-column">
        <ul className=" max-md:hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="  text-red-700 font-semibold px-3 lg:text-xl md:max-lg:font-small sm:max-lg:px-1 hover:text-white hover:scale-100 hover:bg-black hover:rounded-md duration-200 cursor-pointer  "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
        onClick={() => setNavi(!navi)}
        className="cursor-pointer max-md:mr-16 z-10 md:max-2xl:hidden text-center justify-center items-center"
      >
        {navi ? <FaTimes size={20} color="red"/> : <FaBars size={20} color="red" />}
      </div>
      
      {navi && (
        <ul
          className="flex flex-col  justify-center text-white items-center absolute top-0 left-0 w-screen 
      h-[70%] bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-2 text-2xl cursor-pointer font-medium"
            >
              <Link
                onClick={() =>setNavi(navi)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default NavBar;
