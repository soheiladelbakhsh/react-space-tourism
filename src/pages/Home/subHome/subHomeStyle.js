import { makeStyles } from "@mui/styles";

import { Theme } from "../../../theme/Theme";

export const subHomeStyle = makeStyles({
  BgLink: {
    backgroundColor: "transparent",
    transition: "all ease .5s",
    "& .exploreLink": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: Theme.typography.h4.fontSize,
      fontFamily: Theme.typography.h4.fontFamily,
      color: Theme.palette.primary.black,
      width: "250px",
      height: "250px",
      backgroundColor: Theme.palette.primary.main,
      borderRadius: "100%",
      [Theme.breakpoints.down('sm')]:{
      fontSize: `${Theme.typography.h4Mobile.fontSize}!important`,
      width:"150px!important",
      height:"150px!important"
      },
    },
    [Theme.breakpoints.down('sm')]:{
      width:'230px!important',
      height:'230px!important'
    },
  },
  mdMode: {
    [Theme.breakpoints.down("lg")]: {
      alignItems: "center!important",
      justifyContent: "center!important",
      flexDirection: "column!important",
    },
    "& .mdSpaceDesc": {
      [Theme.breakpoints.down("lg")]: {
        textAlign: "center!important",
      },
    },
  },
  resModeExplore:{
    [Theme.breakpoints.down('lg')]:{
      marginTop:"5rem!important"
    },
    [Theme.breakpoints.down('sm')]:{
      marginTop:"2rem!important"
    }
  },
  resdesc:{
    [Theme.breakpoints.down('sm')]:{
      fontSize:`${Theme.typography.body1Mobile.fontSize}!important`,
      width:"auto!important"
    }
  }
  ,
  h1FontRes:{
    [Theme.breakpoints.down('sm')]:{
      fontSize:`${Theme.typography.h1Mobile.fontSize}!important`
    }
  },
  h5FontRes:{
    [Theme.breakpoints.down('sm')]:{
      fontSize:`${Theme.typography.h5Mobile.fontSize}!important`
    }
  },
  marginTopMobileBoxHome:{
    [Theme.breakpoints.down("sm")]:{
      marginTop:"8rem!important"
    }
  }
});
