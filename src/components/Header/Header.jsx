import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../assets/shared/logo.svg";
import "./scss/style.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Allstate } from "../context/Context";

const style = makeStyles({
  root: {},
});

const Header = () => {
  const styles = style();
  let {Hover,setHover}=React.useContext(Allstate)

  const firstHover=function(){
    setHover(1)
    console.log(Hover)
  }
  const secondHover=function(){
    setHover(2)
    console.log(Hover)
  }
  const thirdHover=function(){
    setHover(3)
    console.log(Hover)
  }
  const fourHover=function(){
    setHover(4)
    console.log(Hover)
  }

  return (
    <div className="header">
      <Typography varient="div" className={styles.root} className="headerlogo">
        <img src={logo} alt="" />
      </Typography>
      <span className="divider"></span>
      <Typography varient="ul" component="ul">
        <Link to="/" className="links" onClick={()=>firstHover()}>
          <span>00</span> HOME <span className="boreder-hover" style={{backgroundColor:Hover==1&&"white"}}></span>
        </Link>
        <Link to="/destination" className="links" onClick={()=>secondHover()}>
          <span>01</span>  DESTINATION <span className="boreder-hover" style={{backgroundColor:Hover==2&&"white"}}></span>
        </Link>
        <Link to="/crew" className="links" onClick={()=>thirdHover()}>
          <span>02</span> CREW <span className="boreder-hover" style={{backgroundColor:Hover==3&&"white"}}></span>
        </Link>
        <Link to="/technology" className="links mg-r" onClick={()=>fourHover()}>
          <span>03</span> TECHNOLOGY <span className="boreder-hover" style={{backgroundColor:Hover==4&&"white"}}></span>
        </Link>
      </Typography>
    </div>
  );
};

export default Header;
