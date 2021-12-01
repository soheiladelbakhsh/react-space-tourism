import React from "react";

import { Container, Tabs, Typography, Tab, Grid, Drawer } from "@mui/material";
import { Box, style } from "@mui/system";

import { Theme } from "../../theme/Theme";

import logo from "../../assets/shared/logo.svg";

import { HeaderStyle } from "./HeaderStyle";

import clsx from "clsx";

import { Link } from "react-router-dom";

import ToggleHeader from "./Header-Moblie/ToggleHeader";

import MenuIcon from '@mui/icons-material/Menu';
import { Contexts } from "../../context/Context";


const Header = () => {
  const headerstyle = HeaderStyle();


  let {Toggling,setToggling}=React.useContext(Contexts)

  const TogglingMenuBtn=function(){
    setToggling(true)
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginTop={8}
        zIndex="100"
        width="100vw"
        className={headerstyle.TopBoxResMarginMobile}
      >
        <Grid container display="flex" flexDirection="row" alignItems="center">
          <Grid item lg={0.5} sm={0.5} xs={0.5}></Grid>
          <Grid item lg={1} sm={1} xs={1}>
            <img src={logo} alt="" />
          </Grid>
          <Box
            component="span"
            display="inline-block"
            width="35vw"
            height="1px"
            backgroundColor={Theme.palette.primary.gray}
            className={headerstyle.spandivider}
          ></Box>

          <Grid
            item
            container
            lg={6.5}
            md={6.5}
            sm={8.3}
            position="absolute"
            right="0"
            backgroundColor={Theme.palette.primary.BgHeaderItem}
            className={headerstyle.headerListLinkResMode}
          >
            <Grid item lg={1} sm={1} xs={0}></Grid>
            <Link
              to="/"
              className={`${clsx(headerstyle.linkStyle, headerstyle.margin)}`}
            >
              <Typography variant="span">00</Typography>HOME
            </Link>
            <Link
              to="/Destination"
              className={`${clsx(headerstyle.linkStyle, headerstyle.margin)}`}
            >
              <Typography variant="span">01</Typography>DESTINATION
            </Link>
            <Link
              to="/Crew"
              className={`${clsx(headerstyle.linkStyle, headerstyle.margin)}`}
            >
              <Typography variant="span">02</Typography>CREW
            </Link>

            <Link to="/Technology" className={`${headerstyle.linkStyle}`}>
              <Typography variant="span">03</Typography>TECHNOLOGY
            </Link>
          </Grid>

          <Grid lg={0} sm={0} xs={4}></Grid>
          <Grid lg={0} sm={0} xs={6}>
            <ToggleHeader />
            <button className={headerstyle.btnToggleMenu} style={{color:Toggling?"transparent":"white"}} onClick={TogglingMenuBtn}><MenuIcon/></button> 
          </Grid>
          <Grid lg={0} sm={0} xs={0.5}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
