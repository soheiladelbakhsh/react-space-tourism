import React from "react";

import Header from "../../components/Header/Header";
import { Box } from "@mui/system";
import { HomeStyle } from "./HomeStyle";
import { Typography } from "@mui/material";
import SubHome from "./subHome/SubHome";

const Home = () => {

  const style=HomeStyle()

  return (
    <>
      <Box className={style.root} zIndex="-2">
        <SubHome/>
      </Box>
    </>
  );
};

export default Home;
