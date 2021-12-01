import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { Theme } from "../../theme/Theme";

import { TechnologyStyle } from "./TechnologyStyle";

import { TechnologyDataSource } from "../../data/Data";

import TechnologyImg from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import TechnologyImg2 from "../../assets/technology/image-space-capsule-portrait.jpg";
import TechnologyImg3 from "../../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const style = TechnologyStyle();

  const [landscapeimg, setLandscapeimg] = React.useState(1);

  console.log(TechnologyDataSource);

  const [TechnologyData, setTechnologyData] = React.useState(
    TechnologyDataSource[0]
  );

  const [SelectedTechnology, setSelectedTechnology] = React.useState(0);

  const selectLaunch = function () {
    setTechnologyData(TechnologyDataSource[0]);
    setSelectedTechnology(0);
    setLandscapeimg(1)
  };
  const selectSpaceport = function () {
    setTechnologyData(TechnologyDataSource[1]);
    setSelectedTechnology(1);
    setLandscapeimg(2)
  };
  const selectcapsule = function () {
    setTechnologyData(TechnologyDataSource[2]);
    setSelectedTechnology(2);
    setLandscapeimg(3)
  };

  return (
    <>
      <Box className={style.BgTechnology}>
        <Grid container marginTop="12rem">
          <Grid item lg={1.5} sm={0.5} xs={0}></Grid>
          <Grid
            item
            lg={5}
            sm={11.5}
            xs={12}
            className={style.launchMobileDisplay}
          >
            <Typography variant="h5" className={style.h5MobileModeTypography}>
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
          <Grid item lg={5.5} sm={0}></Grid>
        </Grid>
        <Grid
          container
          display="flex"
          alignItems="center"
          marginBottom="3rem"
          className={style.resModeTechnologyBottom}
        >
          <Grid item lg={1.5} sm={0}></Grid>
          <Grid item lg={6.5} display="flex" sm={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="292.350px"
              // marginTop="130px"
              marginRight="100px"
              className={style.resModeBtnGroupFirst}
            >
              <button
                className={
                  SelectedTechnology == 0
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectLaunch();
                }}
              >
                <Typography variant="h4">1</Typography>
              </button>
              <button
                className={
                  SelectedTechnology == 1
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectSpaceport();
                }}
              >
                <Typography variant="h4">2</Typography>
              </button>
              <button
                className={
                  SelectedTechnology == 2
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectcapsule();
                }}
              >
                <Typography variant="h4">3</Typography>
              </button>
            </Box>
            <Box>
              <Typography
                variant="span"
                fontSize={Theme.typography.fontSize16px}
                fontFamily={Theme.typography.fontFamily2}
                color={Theme.palette.primary.light}
                className={style.spanMobileModeTerminology}
              >
                THE TERMINOLOGY…
              </Typography>
              <Typography
                variant="h3"
                className={clsx(
                  style.fontTransitionUppercase,
                  style.h3MobileModeTypography
                )}
                margin="20px 0 25px 0"
              >
                {TechnologyData.name}
              </Typography>
              <Typography
                variant="body1"
                width="430px"
                color={Theme.palette.primary.light}
                className={style.DescLaunchMobileMode}
              >
                {TechnologyData.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={0.5} sm={0}></Grid>
          <Grid
            item
            lg={3.5}
            sm={12}
            className={style.resModeTechnologySub}
            width="100%"
            overflowX="hidden"
          >
            <img
              src={TechnologyImg}
              alt=""
              className={style.landscapeImg}
              style={{ display: landscapeimg == 1 ? "block" : "none" }}
            />
            <img
              src={TechnologyImg2}
              alt=""
              className={style.landscapeImg}
              style={{ display: landscapeimg == 3 ? "block" : "none" }}
            />
            <img
              src={TechnologyImg3}
              alt=""
              className={style.landscapeImg}
              style={{ display: landscapeimg == 2 ? "block" : "none" }}
            />
            <img
              src={TechnologyData.images.portrait}
              alt=""
              className={style.PortraitImg}
            />
            <Box
              display="none"
              flexDirection="row"
              justifyContent="space-between"
              /// height="292.350px"
              // marginTop="130px"
              // marginRight="100px"
              width="250px"
              className={style.resModeBtnGroupSecond}
              margin="4rem 0 4rem 0"
            >
              <button
                className={
                  SelectedTechnology == 0
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectLaunch();
                }}
              >
                <Typography variant="h4">1</Typography>
              </button>
              <button
                className={
                  SelectedTechnology == 1
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectSpaceport();
                }}
              >
                <Typography variant="h4">2</Typography>
              </button>
              <button
                className={
                  SelectedTechnology == 2
                    ? clsx(style.btnTechnology, style.selecteditem)
                    : style.btnTechnology
                }
                onClick={() => {
                  selectcapsule();
                }}
              >
                <Typography variant="h4">3</Typography>
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
