import { Container, Tabs, Typography, Tab, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Theme } from "../../theme/Theme";

import logo from "../../assets/shared/logo.svg";

import { HeaderStyle } from "./HeaderStyle";

import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
  const headerstyle = HeaderStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginTop={8}
        zIndex="100"
      >
        <Grid item lg={0.5}></Grid>
        <Grid item lg={1}>
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
          position="absolute"
          right="0"
          backgroundColor="rgba(255, 255, 255, 0.04)"
        >
          <Grid item lg={1}></Grid>
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
      </Box>
    </>
  );
};

export default Header;
