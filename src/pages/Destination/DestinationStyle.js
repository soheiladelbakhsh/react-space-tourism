import { makeStyles } from "@mui/styles";

import BgDestinationDesktop from "../../assets/destination/BgDestinationDesktop.jpg";
import { Theme } from "../../theme/Theme";

export const DestinationStyle = makeStyles({
  BgDestination: {
    backgroundImage: `URL(${BgDestinationDesktop})`,
    backgroundSize:"cover",
    width: "100%",
    minHeight: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-2",
  },
  MoonImg: {
    width: "430px",
  },
  tabsStyle: {
    color: Theme.palette.primary.light,
    "& button": {
      color: Theme.palette.primary.light,
      marginRight: "10px",
      fontFamily: Theme.typography.subtitle2.fontFamily,
      fontSize: Theme.typography.subtitle2.fontSize,
      letterSpacing: Theme.typography.subtitle2.letterSpacing,
      position: "relative",
      "&::before": {
        content: "''",
        display: "inline-block",
        height: "3px",
        borderRadius: "3px",
        width: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        bottom: "0",
        left: "0",
        transition: "all ease .5s",
      },
      "&:hover": {
        "&::before": {
          backgroundColor: Theme.palette.primary.grayHover,
        },
      },
    },
  },
  uppercasetransform: {
    textTransform: "uppercase",
  },
  divider: {
    backgroundColor: Theme.palette.primary.gray,
    marginTop: "40px!important",
    marginBottom: "20px!important",
    width:"100%",
    [Theme.breakpoints.down('lg')]:{
        width:"70%!important",
    }
  },
  resToggle: {
    [Theme.breakpoints.down("lg")]: {
      display: "flex!important",
      alignItems: "center!important",
      textAlign: "center!important",
    },
  },
  resToggleDesc: {
    [Theme.breakpoints.down("lg")]: {
        alignItems: "center !important",
        display: "flex!important",
        flexDirection: "column!important",
        marginTop:"40px!important"
      },
  },
});
