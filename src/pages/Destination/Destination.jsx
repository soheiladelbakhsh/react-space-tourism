import { Grid, Tabs, Typography, Tab, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { Theme } from "../../theme/Theme";

import { DestinationStyle } from "./DestinationStyle";

import MoonImg from "../../assets/destination/image-moon.png";
import marsImg from "../../assets/destination/image-mars.png";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";

import { DestinationDataSource } from "../../data/Data";

const Destination = () => {
  const style = DestinationStyle();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let admins = require("../../data/data.json");

  const [DestinationData, setDestinationData] = React.useState(
    DestinationDataSource[0]
  );
  console.log(DestinationData);

  const moonSelect = function () {
    setDestinationData(DestinationDataSource[0]);
  };
  const marsSelect = function () {
    setDestinationData(DestinationDataSource[1]);
  };
  const europaSelect = function () {
    setDestinationData(DestinationDataSource[2]);
  };
  const titanSelect = function () {
    setDestinationData(DestinationDataSource[3]);
  };

  return (
    <>
      <Box className={style.BgDestination}>
        <Grid container marginTop="12rem">
          <Grid item lg={1.5}></Grid>
          <Grid item lg={4.5}>
            <Typography variant="h5">
              {" "}
              <Typography
                variant="span"
                color={Theme.palette.primary.gray}
                fontWeight={Theme.typography.Bold}
              >
                01
              </Typography>{" "}
              PICK YOUR DESTINATION
            </Typography>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
        <Grid container marginTop="3rem">
          <Grid item lg={1.9}></Grid>
          <Grid item lg={4}>
            <Box>
              <img
                src={DestinationData.images.png}
                alt=""
                className={style.MoonImg}
              />
            </Box>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={4.1}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                className={style.tabsStyle}
              >
                <Tab
                  label="MOON"
                  onClick={() => {
                    moonSelect();
                  }}
                />
                <Tab
                  label="MARS"
                  onClick={() => {
                    marsSelect();
                  }}
                />
                <Tab
                  label="EUROPA"
                  onClick={() => {
                    europaSelect();
                  }}
                />
                <Tab
                  label="TITIAN"
                  onClick={() => {
                    titanSelect();
                  }}
                />
              </Tabs>
            </Box>
            <Typography
              variant="h2"
              className={style.uppercasetransform}
              margin="20px 0 20px 0"
            >
              {DestinationData.name}
            </Typography>
            <Typography variant="body1" color={Theme.palette.primary.light}>
              {DestinationData.description}
            </Typography>
            <Divider className={style.divider} />
            <Box display="flex" alignItems="center">
              <Box color="white" marginRight="100px">
                <Typography variant="subtitle2" color={Theme.palette.primary.light}>AVG. DISTANCE</Typography>
                <Typography
                  variant="subtitle1"
                  className={style.uppercasetransform}
                >
                  {DestinationData.distance}
                </Typography>
              </Box>
              <Box color="white">
                <Typography variant="subtitle2" color={Theme.palette.primary.light}>Est. travel time</Typography>
                <Typography
                  variant="subtitle1"
                  className={style.uppercasetransform}
                >
                  {DestinationData.travel}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={1}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Destination;
