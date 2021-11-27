import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#0bbd17",
      dark: "#d0d6f9",
      gray: "gray",
      grayHover:"#d2d2d238",
      black: "black",
      linkHover: "#ffffff17",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontSize: 18,
    fontFamily1: "Bellefair",
    fontFamily2: "Barlow",
    Bold: "700",
    h1: {
      fontSize: "150px",
      fontFamily: "Bellefair",
    },
    h2: {
      fontSize: "100px",
      fontFamily: "Bellefair",
    },
    h3: {
      fontSize: "56px",
      fontFamily: "Bellefair",
    },
    h4: {
      fontSize: "32px",
      fontFamily: "Bellefair",
    },
    h5: {
      fontSize: "28px",
      letterSpacing: "4.75px",
      fontFamily: "Barlow",
    },
    subtitle1: {
      fontSize: "28px",
      fontFamily: "Bellefair",
    },
    subtitle2: {
      fontSize: "14px",
      letterSpacing: "2.35px",
      fontFamily: "Barlow",
    },
    body1: {
      fontSize: "18px",
      fontFamily: "Barlow",
    },
  },
});
