import React from "react";
import { Box } from "@mui/material";
import Item from "./Item";

const CenterBody = () => {
  return (
    <Box flex={3} p={2}>
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  );
};

export default CenterBody;
