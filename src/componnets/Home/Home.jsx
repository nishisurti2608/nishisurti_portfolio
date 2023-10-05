import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import HeroImage from "../../assets/nishiprofile.jpeg";
const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full dark:bg-gradient-to-b dark:bg-gray-800 dark:text-white text-gray-800 bg-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-20">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">Hi! 👋🏽 I'm Nishi</h2>
          <h1 className="dark:text-gray-300 text-gray-800 py-4 max-w-md">
            Developer | Designer | Proud Indian 🇮🇳
          </h1>
          <p className="dark:text-gray-300  text-gray-800 py-4 max-w-md">
            Hello World. I'm a freelancer located in Kitchener, Canada 🇨🇦 who
            loves to design and develop. I am always excited to discuss new
            ideas with like minded people. Got an idea 💡 for me? Let's talk
            over a coffee.
          </p>
          <div className="group">
            <button
              className=" dark:text-gray-800 
             font-bold  w-fit px-6 py-3 my-2 flex items-center rounded-md dark:bg-gradient-to-l from-slate-400 to-slate-500 
            border-2
             border-gray-800

             cursor-pointer hover:scale-110 duration-300"
            >
              My Skills
              <span className="group-hover hover:rotate-90 duration-300">
                <BsArrowRightShort size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="nishiprofile"
            className="rounded-full mx-auto w-2/3  md:w-full md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
