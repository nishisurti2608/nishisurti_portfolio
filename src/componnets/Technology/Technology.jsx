import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import nextjs from "../../assets/nextjs.png";
import graphql from "../../assets/graphql.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";

const Technology = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-[#29b6f6]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-700",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "dark:shadow-gary-800 shadow-black",
    },
  ];

  return (
    <div name="Skill" className=" dark:bg-gray-800 bg-white  p-4 h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white text-gray-800">
        <div>
          <h2 className="text-4xl sm:text-7xl font-bold py-4 text-center ">
            Skills
          </h2>
          <h1 className="dark:text-gray-300 text-center text-gray-600">
            I pulled my hair manytimes but that was worth <br />
            <span className="text-gray-400 py-4"></span>
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
