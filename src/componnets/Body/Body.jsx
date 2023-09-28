import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Sociallinks from "../Sociallinks/Sociallinks";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Technology from "../Technology/Technology";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sociallinks />
      <About />
      <Portfolio />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
