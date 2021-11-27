import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Destination from "../pages/Destination/Destination";
import Header from "../components/Header/Header";
import Crew from "../pages/Crew/Crew";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew/>}/>
      </Routes>
    </>
  );
};

export default App;
