import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} color="#1F2937" />
        </>
      ),
      href: "https://www.linkedin.com/in/nishisurti/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} color="#1F2937" />
        </>
      ),
      href: "https://github.com/nishisurti2608",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} color="#1F2937" />
        </>
      ),
      href: "mailto:01nishisurti@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} color="#1F2937" />
        </>
      ),
      href: "/NishiSurti_Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed  ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gradient-to-l  from-slate-400 to-slate-500  hover:ml-[-10px] hover:rounded-md duration-300 delay-75" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;
