import Navbar from "./componnets/Navbar/Navbar";
import Home from "./componnets/Home/Home";
import Sociallinks from "./componnets/Sociallinks/Sociallinks";
import About from "./componnets/About/About";
import Portfolio from "./componnets/Portfolio/Portfolio";
import Technology from "./componnets/Technology/Technology";
import Contact from "./componnets/Contact/Contact";
import Footer from "./componnets/Footer/Footer";

function App() {
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
}

export default App;
