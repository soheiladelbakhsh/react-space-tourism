import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { Theme } from "../../theme/Theme";

import { TechnologyStyle } from "./TechnologyStyle";

import { TechnologyDataSource } from "../../data/Data";

import TechnologyImg from "../../assets/technology/image-space-capsule-portrait.jpg"
import TechnologyImg2 from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import TechnologyImg3 from "../../assets/technology/image-spaceport-portrait.jpg"

const Technology = () => {
  const style = TechnologyStyle();

  console.log(TechnologyDataSource);

  const [TechnologyData, setTechnologyData] = React.useState(
    TechnologyDataSource[0]
  );

  const [SelectedTechnology, setSelectedTechnology] = React.useState(0)


  const selectLaunch=function(){
    setTechnologyData(TechnologyDataSource[0])
    setSelectedTechnology(0)
  }
  const selectSpaceport=function(){
    setTechnologyData(TechnologyDataSource[1])
    setSelectedTechnology(1)
  }
  const selectcapsule=function(){
    setTechnologyData(TechnologyDataSource[2])
    setSelectedTechnology(2)
  }


  return (
    <>
      <Box className={style.BgTechnology}>
        <Grid container marginTop="12rem">
          <Grid item lg={1.5}></Grid>
          <Grid item lg={5}>
            <Typography variant="h5">
              {" "}
              <Typography
                variant="span"
                color={Theme.palette.primary.gray}
                fontWeight={Theme.typography.Bold}
              >
                03
              </Typography>{" "}
              SPACE LAUNCH 101
            </Typography>
          </Grid>
          <Grid item lg={5.5}></Grid>
        </Grid>
        <Grid container display="flex" alignItems="center" marginBottom="3rem">
          <Grid item lg={1.5}></Grid>
          <Grid item lg={6.5} display="flex">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="292.350px"
             // marginTop="130px"
              marginRight="100px"
            >
              <button className={SelectedTechnology==0?clsx(style.btnTechnology,style.selecteditem): style.btnTechnology} onClick={()=>{selectLaunch()}}>
                <Typography variant="h4">1</Typography>
              </button>
              <button className={SelectedTechnology==1?clsx(style.btnTechnology,style.selecteditem): style.btnTechnology} onClick={()=>{selectSpaceport()}}>
                <Typography variant="h4">2</Typography>
              </button>
              <button className={SelectedTechnology==2?clsx(style.btnTechnology,style.selecteditem): style.btnTechnology} onClick={()=>{selectcapsule()}}>
                <Typography variant="h4">3</Typography>
              </button>
            </Box>
            <Box >
              <Typography
                variant="span"
                fontSize={Theme.typography.fontSize16px}
                fontFamily={Theme.typography.fontFamily2}
                color={Theme.palette.primary.light}
              >
                THE TERMINOLOGY…
              </Typography>
              <Typography
                variant="h3"
                className={style.fontTransitionUppercase}
                margin="20px 0 25px 0"
              >
                {TechnologyData.name}
              </Typography>
              <Typography
                variant="body1"
                width="430px"
                color={Theme.palette.primary.light}
              >
                {TechnologyData.description}
                
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={.5}></Grid>
          <Grid item lg={3.5}>
            <img src={TechnologyData.images.landscape} alt="" className={style.PortraitImg}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
