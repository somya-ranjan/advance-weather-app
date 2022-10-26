import { Box, Typography } from "@mui/material";
import React from "react";

function NoData() {
  return (
    <Box
      color="gray"
      sx={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}>
      <Typography variant="h1">
        <i className="fas fa-database" />
      </Typography>
      <h1>Data not found !</h1>
    </Box>
  );
}

export default NoData;
