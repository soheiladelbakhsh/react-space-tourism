import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Theme } from "../../theme/Theme";

import { CrewStyle } from "./CrewStyle";

import { CrewDestinationSource } from "../../data/Data";

import ex from "../../assets/crew/image-anousheh-ansari.png";
import ex2 from "../../assets/crew/image-douglas-hurley.png";
import ex3 from "../../assets/crew/image-mark-shuttleworth.png";
import ex4 from "../../assets/crew/image-victor-glover.png";

const Crew = () => {
  const style = CrewStyle();

  console.log(CrewDestinationSource);

  const [CrewData, setCrewData] = React.useState(CrewDestinationSource[0]);

  const [Bgbtn, setBgbtn] = React.useState(0);

  const DouglasSelect = function () {
    setCrewData(CrewDestinationSource[0]);
    setBgbtn(0);
  };
  const MarkSelect = function () {
    setCrewData(CrewDestinationSource[1]);
    setBgbtn(1);
  };
  const VictorSelect = function () {
    setCrewData(CrewDestinationSource[2]);
    setBgbtn(2);
  };
  const AnoushehSelect = function () {
    setCrewData(CrewDestinationSource[3]);
    setBgbtn(3);
  };

  return (
    <Box className={style.bgCrew}>
      <Grid container marginTop="12rem">
        <Grid item lg={1.5}></Grid>
        <Grid item lg={4}>
          <Typography variant="h5" marginBottom="6rem">
            {" "}
            <Typography
              variant="span"
              color={Theme.palette.primary.gray}
              fontWeight={Theme.typography.Bold}
            >
              02
            </Typography>{" "}
            MEET YOUR CREW
          </Typography>
          <Typography
            variant="h4"
            color={Theme.palette.primary.gray}
            className={style.uppercaseTransform}
          >
            {CrewData.role}
          </Typography>
          <Typography
            variant="h3"
            className={style.uppercaseTransform}
            margin="1rem 0 2rem 0"
            width="700px"
          >
            {CrewData.name}
          </Typography>
          <Typography variant="body1" width="450px">
            {CrewData.bio}
          </Typography>
          <Box position="absolute" bottom="4rem">
            <button
              className={style.btnRound}
              onClick={() => {
                DouglasSelect();
              }}
            >
              <span  style={{backgroundColor:Bgbtn==0?Theme.palette.primary.main:Theme.palette.primary.grayhover}}></span>
            </button>
            <button
              className={style.btnRound}
              onClick={() => {
                MarkSelect();
              }}
            >
              <span  style={{backgroundColor:Bgbtn==1?Theme.palette.primary.main:Theme.palette.primary.grayhover}}></span>
            </button>
            <button
              className={style.btnRound}
              onClick={() => {
                VictorSelect();
              }}
            >
              <span  style={{backgroundColor:Bgbtn==2?Theme.palette.primary.main:Theme.palette.primary.grayhover}}></span>
            </button>
            <button
              className={style.btnRound}
              onClick={() => {
                AnoushehSelect();
              }}
            >
              <span  style={{backgroundColor:Bgbtn==3?Theme.palette.primary.main:Theme.palette.primary.grayhover}}></span>
            </button>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={4} height="560.5px">
          <img src={CrewData.images.png} alt="" className={style.imgCrew} />
        </Grid>
        <Grid item lg={1.5}></Grid>
      </Grid>
    </Box>
  );
};

export default Crew;
