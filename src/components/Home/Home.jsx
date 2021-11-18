import { Grid } from "@material-ui/core";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Allstate } from "../context/Context";


import "./scss/style.scss";

const Home = () => {
  const [hoverDiv, sethoverDiv] = React.useState(false)
  const x = function () {
    sethoverDiv(true)
    console.log(hoverDiv)
  };
  const y= function (){
    sethoverDiv(false)
  }
  let {Hover,setHover}=React.useContext(Allstate)
  const secondHover=function(){
    setHover(2)
    console.log(Hover)
  }
  return (
    <>
      <Grid container className="home">
        <Grid item container>
          <Grid item lg={1}></Grid>
          <Grid item lg={5} className="Left-Home">
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <span>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </Grid>
          <Grid
            container
            item
            lg={5}
            justifyContent="center"
            className="gridExplore"
          >
              <div className="explore-hover" style={{backgroundColor:hoverDiv?"rgba(253, 253, 253, 0.11)":"transparent"}}></div>
            <Link to="/destinition" className="explore" onClick={()=>secondHover()} onMouseEnter={()=>x()} onMouseLeave={()=>y()}>
              EXPLORE
            </Link>
            
          </Grid>
          <Grid item lg={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
