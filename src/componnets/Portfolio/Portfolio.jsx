import React from "react";
import arrayDestruct from "../../assets/portfolio/arrayDestruct.jpg";

import navbar from "../../assets/portfolio/navbar.jpg";
import reactParallax from "../../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 2,
      src: reactParallax,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 3,
      src: navbar,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 4,
      src: navbar,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 5,
      src: navbar,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 6,
      src: navbar,
      pname: "SiHellofresh",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      languages: ["React", "NodeJS", "MongoDB"],
    },
  ];

  return (
    <div
      name="Portfolio"
      className="dark:bg-gray-800  w-full bg-white text-white h-full"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-7xl font-bold py-4 text-center dark:text-white text-gray-800 ">
            Portfolio
          </h2>
          <h1 className="dark:text-gray-300 text-gray-700 text-center">
            Knowledge I earned by following projects <br />
            <span className="text-gray-400 py-4"></span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, pname, des, languages }) => (
            <div
              key={id}
              className="shadow-md dark:shadow-gray-600  shadow-gray-800 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-white text-gray-800">
                  {pname}
                </div>
                <p class="text-gray-700 text-base">{des}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {languages.map((name) => (
                  <span
                    key={name}
                    className="inline-block dark:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-700 mr-2 mb-2 bg-gray-800"
                  >
                    #{name}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 dark:text-white text-gray-800 hover:scale-105 border-2 rounded-md  border-gray-500">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-2 rounded-md dark:text-white text-gray-800 border-gray-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
