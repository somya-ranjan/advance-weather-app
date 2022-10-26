import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherStart } from "../Store/GetWeather/action";
import moment from "moment";

function Header() {
  // // initial state
  const dispatch = useDispatch();

  // // local state
  const [searchValue, setSearchValue] = useState();

  // // function
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeatherStart(searchValue));
  };

  return (
    <Paper sx={{ width: "94.5%", margin: "auto", padding: "10px 0" }}>
      <Grid container justifyContent="space-between" alignItems="center" px={2}>
        <Grid item xs={5}>
          <Box component="form" display="flex" onSubmit={handelSubmit}>
            <TextField
              type="search"
              size="small"
              fullWidth
              required
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginLeft: "20px" }}>
              Search
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ color: "#2146C7" }}>
          <Typography variant="h6" textAlign="right">
            {`${moment(new Date()).format("dddd, DD/MM/YYYY")}`} <br />
            {`${moment(new Date()).format("hh:mmA")}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
