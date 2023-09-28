import Body from "./componnets/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./componnets/Navbar/Navbar";

import Error from "./componnets/Error/Error";
import AllPortfolio from "./componnets/Portfolio/AllPortfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
