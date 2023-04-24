import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { Geochart } from "../../components/GeoChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" />
      <Box height="75vh" border="1px solid #000" borderRadius="4px">
        <Geochart />
      </Box>
    </Box>
  );
};

export default Geography;
