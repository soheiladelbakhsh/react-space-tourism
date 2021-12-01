import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Contexts } from "../../../context/Context";
import { Theme } from "../../../theme/Theme";
import { ToggleHeaderStyle } from "./ToggleHeaderStyle";

import CloseIcon from "@mui/icons-material/Close";

const ToggleHeader = () => {
  const style = ToggleHeaderStyle();

  let { Toggling, setToggling } = React.useContext(Contexts);

  const handleClickOut = React.useRef(null)


  const togglingHeader = function () {
    setToggling(!Toggling);
    window.scroll(0, 0);
  };

  const closeBtnFunc=function(){
    setToggling(false)
  }


  return (
    <>
      <Box
        position="fixed"
        top="0"
        backgroundColor="#5e5e5ee0"
        height="100%"
        width="70%"
        className={
          Toggling
            ? style.HeaderFixed
            : clsx(style.HeaderFixed, style.rightUnvisible)
        }
        zIndex='101'
        ref={handleClickOut}
      >
        <Grid
          item
          xs={12}
          sm={0}
          marginTop="30px"
          display="flex"
          justifyContent="end"
        >
          <button className={style.closeHeader} onClick={closeBtnFunc}>
            {" "}
            <CloseIcon />
          </button>
          <Grid xs={0.5} sm={0}></Grid>
        </Grid>
        <Grid item xs={12} sm={0} marginLeft="30px" marginTop="50px">
          <Grid item xs={12} sm={0} marginBottom="25px">
            <Link
              to="/"
              className={style.LinkTypographyHeaderMobile}
              onClick={togglingHeader}
            >
              <Typography variant="span">00</Typography>HOME
            </Link>
          </Grid>
          <Grid item xs={12} sm={0} marginBottom="25px">
            <Link
              to="/Destination"
              className={style.LinkTypographyHeaderMobile}
              onClick={togglingHeader}
            >
              <Typography variant="span">01</Typography>DESTINATION
            </Link>
          </Grid>
          <Grid item xs={12} sm={0} marginBottom="25px">
            <Link
              to="/Crew"
              className={style.LinkTypographyHeaderMobile}
              onClick={togglingHeader}
            >
              <Typography variant="span">00</Typography>CREW
            </Link>
          </Grid>
          <Grid item xs={12} sm={0}>
            <Link
              to="/Technology"
              className={style.LinkTypographyHeaderMobile}
              onClick={togglingHeader}
            >
              <Typography variant="span">00</Typography>TECHNOLOGY
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ToggleHeader;
