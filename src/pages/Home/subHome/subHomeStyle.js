import { makeStyles } from "@mui/styles";

import { Theme } from "../../../theme/Theme";

export const subHomeStyle = makeStyles({
  BgLink: {
      backgroundColor:"transparent",
      transition:"all ease .5s",
    [Theme.breakpoints.down("lg")]: {
      display: "none!important",
    },
    '& .exploreLink': {
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
    },
  },
});
