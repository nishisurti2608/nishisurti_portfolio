import React from "react";
import arrayDestruct from "../../assets/portfolio/arrayDestruct.jpg";

import navbar from "../../assets/portfolio/navbar.jpg";
import reactParallax from "../../assets/portfolio/reactParallax.jpg";

import { BsArrowRightShort } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from black via-slate-800 to bg-gray-800 w-full h-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-7xl font-bold py-4 text-center ">
            Portfolio
          </h2>
          <h1 className="text-gray-300 text-center">
            Personal Hint <br />
            <span className="text-gray-400 py-4">
              I am just rare species who knows both designing and developing
            </span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="max-w-sm rounded overflow-hidden shadow-gray-500 shadow-md"
            >
              <img
                src={src}
                alt=""
                className="w-full hover:scale-105 duration-200  cursor-pointer"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-gray-300">
                  The Coldest Sunset
                </div>
                <p class="text-gray-500 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                  #ReactJS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                  #Tailwind
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                  #Express
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center bg-gradient-to-b from black via-slate-800 to bg-gray-800">
        <button className="justify-center text-gray-800 font-bold px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-slate-400 to-slate-500 cursor-pointer">
          View All
          <span className="group-hover hover:rotate-90 duration-300">
            <BsArrowRightShort size={25} className="ml-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
