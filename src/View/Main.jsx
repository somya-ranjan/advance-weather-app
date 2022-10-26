import React from "react";
import { Grid } from "@mui/material";
import Weather from "../Component/Weather";
import Map from "../Component/Map";
import Header from "../Component/Header";
import Currency from "../Component/Currency";

function Main() {
  return (
    <Grid container height="100vh" alignItems="center">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-evenly">
          <Grid xs={11} md={8} lg={7}>
            <Weather />
          </Grid>
          <Grid xs={11} md={8} lg={4}>
            <Grid container rowGap={4.5}>
              <Grid item xs={12} mt={{ xs: 5, lg: 0 }}>
                <Map />
              </Grid>
              <Grid item xs={12}>
                <Currency />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
