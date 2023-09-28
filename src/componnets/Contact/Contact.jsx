import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from black via-slate-800 to bg-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-7xl font-bold py-4 text-center ">
            Contact
          </h2>
          <h1 className="text-gray-300 text-center">
            Got an idea 💡 for me? Let's talk over a coffee <br />
            <span className="text-gray-400 py-4"></span>
          </h1>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/b99ca912-90c7-407d-9170-c06f03667bae"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="group text-gray-800 bg-gradient-to-l from-slate-400 to-slate-500 px-6 font-bold py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
              <span className="group-hover hover:rotate-90 duration-300">
                <SiBuymeacoffee size={25} className="ml-1" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
