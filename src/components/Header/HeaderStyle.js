import { makeStyles } from "@mui/styles";

import { Theme } from "../../theme/Theme";

export const HeaderStyle = makeStyles({
  linkStyle: {
    color: `${Theme.palette.primary.main}!important`,
    paddingTop: "2rem!important",
    paddingBottom: "2rem!important",
    // position:"relative",
    fontSize: `${Theme.typography.subtitle2.fontSize}!important`,
    fontFamily: `${Theme.typography.fontFamily2}!important`,
    position: "relative",
    '& span':{
      fontWeight:Theme.typography.Bold,
      marginRight:"10px"
    },
    "&::before": {
      content: '""',
      backgroundColor: "transparent",
      width: "100%",
      height: "2.5px",
      position: "absolute",
      bottom: "0",
      left: "0",
      transition: "all ease .3s",
    },
    "&:hover": {
      "&::before": {
        backgroundColor: Theme.palette.primary.grayHover,
      },
    },
  },
  active:{
    "&::before": {
        content: '""',
        backgroundColor: "black",
        width: "100%",
        height: "2.5px",
        position: "absolute",
        bottom: "0",
        left: "0",
        transition: "all ease .3s",
      }
  },
  margin: {
    marginRight: "55px!important",
    [Theme.breakpoints.down('lg')]:{
      marginRight: "2vw!important",
    }
  },
  spandivider: {
    [Theme.breakpoints.down("lg")]: {
      display: "none!important",
    },
  },
  headerListLinkResMode:{
    [Theme.breakpoints.down('sm')]:{
      display:"none!important"
    }
  },
  TopBoxResMarginMobile:{
    [Theme.breakpoints.down('sm')]:{
      marginTop:"20px!important"
    }
  },
  btnToggleMenu:{
    display:"none",
    [Theme.breakpoints.down("sm")]:{
      display:"inline-block",
      position:"absolute",
      right:"1rem",
      top:"2rem",
      border:"none",
      backgroundColor:"transparent",
      alignItems:"center",
      transition:"all ease 0.5s"
    }
  }
});
