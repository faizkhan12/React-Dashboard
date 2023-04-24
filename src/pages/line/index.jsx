import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import Linechart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="LINE CHART" />
      <Box height="75vh">
        <Linechart />
      </Box>
    </Box>
  );
};

export default Line;
