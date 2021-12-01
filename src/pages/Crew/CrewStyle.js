import { makeStyles } from "@mui/styles";
import CrewDesktopBg from "../../assets/crew/background-crew-desktop.jpg";
import { Theme } from "../../theme/Theme";

export const CrewStyle = makeStyles({
  bgCrew: {
    backgroundImage: `URL(${CrewDesktopBg})`,
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-2",
  },
  uppercaseTransform: {
    textTransform: "uppercase",
  },
  btnRound: {
    backgroundColor: "transparent",
    marginRight: "22px",
    zIndex: "2",
    "& span": {
      display: "inline-block",
      width: "13px",
      height: "13px",
      backgroundColor: Theme.palette.primary.grayHover,
      borderRadius: "100%",
      transition: "all ease .3s",
    },
    "&:hover": {
      "& span": {
        backgroundColor: Theme.palette.primary.main,
      },
    },
  },
  imgCrew: {
    width: "412px",
    height: "100%",
    [Theme.breakpoints.down("sm")]:{
        width:"90%!important"
    }
  },
  resModeBtnGroup: {
    [Theme.breakpoints.down("lg")]: {
      position: "relative!important",
      bottom: "0!important",
      margin: "1rem 0 2rem 0",
    },
    [Theme.breakpoints.down("sm")]: {
        display:"none"
    }
  },
  resModeCrew: {
    [Theme.breakpoints.down("lg")]: {
      display: "flex!important",
      flexDirection: "column!important",
      alignItems: "center!important",
      textAlign: "center!important",
      marginTop:"192px!important"
    },
    "& h5": {
      [Theme.breakpoints.down("sm")]: {
        fontSize: `${Theme.typography.h5Mobile.fontSize}!important`,
      },
    },
    [Theme.breakpoints.down("sm")]:{
        flexDirection:"column-reverse!important"
    }
  },
  resModeCrewItem: {
    [Theme.breakpoints.down("lg")]: {
      display: "flex!important",
      flexDirection: "column!important",
      alignItems: "center!important",
      textAlign: "center!important",
      "& h5": {
        marginBottom: "2rem!important",
      },
    },
    '& h4':{
        [Theme.breakpoints.down('sm')]:{
            fontSize:`${Theme.typography.h5Mobile.fontSize}!important`
        }
    },
    '& h3':{
        [Theme.breakpoints.down("sm")]:{
            width:"auto!important",
            fontSize:`${Theme.typography.h3Mobile.fontSize}!important`
        }
    },
    '& p':{
        [Theme.breakpoints.down('sm')]:{
            fontSize:`${Theme.typography.body1Mobile.fontSize}!important`,
            width:"auto"
        }
    }
  },
  ResModeTitle: {
    display: "none",
    [Theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  FirstTitleResMode:{
      [Theme.breakpoints.down("lg")]:{
          display:"none"
      }
  },
  resModeBtnGroupSecond:{
      display:"none",
      [Theme.breakpoints.down("sm")]:{
          display:"flex",
          marginTop:"4rem",
          marginBottom:"4rem"
      }
  },
  spanDividerImgMobileMode:{
      display:"none",
      [Theme.breakpoints.down('sm')]:{
          display:"inline-block",
          width:"100%",
          right:"0",
          height:"1px",
          backgroundColor:Theme.palette.primary.grayHover,
          position:"absolute",
          bottom:"0"
      }
  },
  PositionMobileImgDivider:{
      [Theme.breakpoints.down("sm")]:{
          position:"relative"
      }
  },
  MarginBottomH5MobileMode:{
      [Theme.breakpoints.down("lg")]:{
          marginBottom:"50px!important"
      }
  },
  meetCrewMobileMode:{
    display:"none",
    [Theme.breakpoints.down('lg')]:{
      display:"block!important",
      textAlign:"left"
    },
    [Theme.breakpoints.down('sm')]:{
      display:"none!important",
    }
  },
  NameCrewMobileMode:{
    [Theme.breakpoints.down("md")]:{
      width:"auto!important"
    }
  }
});
