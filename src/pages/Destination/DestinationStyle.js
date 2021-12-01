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
    [Theme.breakpoints.down('sm')]:{
      width:"70%!important"
    }
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
      [Theme.breakpoints.down('sm')]:{
        marginRight:"0!important",
        fontSize:"10px!important",
        padding:'0!important',
        width:'50px!important',
        minWidth:'0!important',
        width:"25%"
      },
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
    [Theme.breakpoints.down("sm")]: {
      justifyContent:"center!importent"
    }
  },
  resToggleDesc: {
    [Theme.breakpoints.down("lg")]: {
        alignItems: "center !important",
        display: "flex!important",
        flexDirection: "column!important",
        marginTop:"40px!important"
      },
  },
  TabItemsResMode:{
    [Theme.breakpoints.down('sm')]:{
      width:'100%!important'
    }
  },
  NameResMode:{
    [Theme.breakpoints.down('sm')]:{
      fontSize:`${Theme.typography.h2Mobile.fontSize}!important`
    }
  },
  DescModeMobile:{
    [Theme.breakpoints.down("sm")]:{
      fontSize:`${Theme.typography.body1Mobile.fontSize}!important`
    }
  },
  h5FontSizeMobile:{
    [Theme.breakpoints.down('sm')]:{
      fontSize:`${Theme.typography.h5Mobile.fontSize}!important`
    }
  },
  timeDescResMobile:{
    [Theme.breakpoints.down('sm')]:{
      flexDirection:"column!important",
    },
    '& .descTimeRes':{
      [Theme.breakpoints.down('sm')]:{
        marginRight:"0!important"
      },
    }
  },
  PickResMode:{
    [Theme.breakpoints.down('sm')]:{
      display:"flex",
      justifyContent:'center',
      textAlign:"center",
      marginTop:"8rem!important"
    }
  }
});
