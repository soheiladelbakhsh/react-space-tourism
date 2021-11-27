import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../../theme/Theme";

import { subHomeStyle } from "./subHomeStyle";

const SubHome = () => {
  const style = subHomeStyle();

  const [HoverLink, setHoverLink] = React.useState(false)

  const HoverOn=function () {
    setHoverLink(true)
  }
  const HoverOff=function () {
    setHoverLink(false)
  }

  return (
    <Box marginTop="17rem">
      <Grid container dispaly="flex" alignItems="center">
        <Grid item lg={1.5}></Grid>
        <Grid item lg={4}>
          <Typography variant="h5">SO,YOU WANT TO TRAVEL TO</Typography>
          <Typography variant="h1" margin="15px 0 25px 0">
            SPACE
          </Typography>
          <Typography variant="body1" width="450px">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={3}>
          <Box
            width="380px"
            height="380px"
            borderRadius="100%"
            display="flex"
            alignItems="center"
            justifyContent="center" 
            className={style.BgLink}
            backgroundColor={HoverLink?Theme.palette.primary.linkHover:"transparent"}
          >
            <Link to="/Destination" className="exploreLink" onMouseEnter={()=>{HoverOn()}} onMouseLeave={()=>{HoverOff()}}>
              EXPLORE
            </Link>
          </Box>
        </Grid>
        <Grid item lg={1.5}></Grid>
      </Grid>
    </Box>
  );
};

export default SubHome;
