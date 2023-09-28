import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col p-4 justify-center  mx-auto h-full text-white bg-gray-800  shadow-md shadow-gray-900">
        <div className="text-white flex justify-center">
          <span className="flex justify-center">
            ©No Copyright Issues Made with
            <GiTechnoHeart
              className="animate-ping mx-2"
              color={"red"}
              size={15}
            />
            in React
            <span className="animate-spin mx-2" size={25}>
              <FaReact />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
