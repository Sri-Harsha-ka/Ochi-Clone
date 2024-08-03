import React from "react";

// components 
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MarqueePage from "./components/MarqeePage";
import About from "./components/About"
import EyesAni from "./components/EyesAni";
import Featchers from "./components/Featchers";
import Fotter from "./components/Fotter";
import Cards from "./components/Card2";

import LocomotiveScroll from "locomotive-scroll"
import Card from "./components/Card2";

function App() {

  const locomotiveScroll = new LocomotiveScroll()

  return (
    <>
     <div className=" text-zinc-900 ">
        <NavBar/>
        <Landing/>
        <MarqueePage/>
        <About />
        <EyesAni />
        <Featchers />
        <Cards />
        <Fotter />
     </div>
    </>
  )
}

export default App
