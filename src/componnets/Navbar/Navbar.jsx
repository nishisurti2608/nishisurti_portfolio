import React, { useState } from "react";
import logo from "../../assets/logo_light.png";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import ThemeSwitcher from "../Themeswitcher/Themeswitcher";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skill",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white dark:bg-gray-800 bg-white fixed shadow-md dark:shadow-gray-900 shadow-gray-100">
      <div>
        <img src={logo} className="App-logo w-full h-20" alt="logo" />
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-800 dark:text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-800 z-10 dark:text-gray-300 md:hidden"
      >
        {nav ? <IoMdClose size={30} /> : <FiMenu size={30} />}
      </div>
      <ThemeSwitcher />
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  dark:bg-gray-800 dark:text-gray-500 bg-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-4xl dark:text-gray-400 text-gray-800 hover:scale-105 duration-200 py-4 hover:border-b-2 dark:hover:border-white border-black "
            >
              <Link
                onClick={() => setNav(!nav)}
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
  );
};

export default Navbar;
