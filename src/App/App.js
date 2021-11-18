import { Typography } from "@material-ui/core";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Allstate } from "../components/context/Context";
import Home from "../components/Home/Home";

import "./Scss/style.scss"



import HomeBg from "../assets/home/BgHomeDesktop.jpg"
import DestinatioBg from "../assets/destination/BgDestinationDesktop.jpg"
import CrewBg from "../assets/crew/background-crew-desktop.jpg"
import TechnologyBg from "../assets/technology/background-technology-desktop.jpg"
import Header from "../components/Header/Header";


const App = () => {
  const { Bg, setBg } = React.useContext(Allstate);
  setBg(HomeBg)

  return (
    <div style={{backgroundImage:`URL(${Bg})`}} className="app">
      <Header/>
      <Routes>
        <Route element={<Home />} path=""></Route>
      </Routes>
      
    </div>
  );
};

export default App;
