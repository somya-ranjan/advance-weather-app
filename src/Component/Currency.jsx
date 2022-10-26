import React, { useEffect, useState } from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { weatherDetails } from "../Store/GetWeather/selector";
import { getCurrencyStart } from "../Store/GetCurrency/action";
import countryToCurrency from "country-to-currency";
import { currencyDetails } from "../Store/GetCurrency/selector";
import NoData from "./NoData";

function Currency() {
  // // initial state
  const dispatch = useDispatch();

  // // redux state
  const reduxState = useSelector(weatherDetails);
  const countryName = reduxState?.city?.country;
  const currencyExchangeDetails = useSelector(currencyDetails);

  // // local state
  const currencyName = countryToCurrency[countryName];
  const apiCurrencyName =
    currencyExchangeDetails &&
    Object.keys(currencyExchangeDetails).filter((item) => {
      return (
        item === "USD" ||
        item === "PKR" ||
        item === "JPY" ||
        item === "HKD" ||
        item === "MYR" ||
        item === "GBP" ||
        item === "EUR" ||
        item === "AED" ||
        item === "AUD"
      );
    });

  // // lifeCycle
  useEffect(() => {
    if (currencyName) {
      dispatch(getCurrencyStart(currencyName));
    }
  }, [countryName]);

  return (
    <Paper sx={{ height: "40vh", position: "relative" }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container textAlign="center" sx={{ color: "#2146C7" }}>
            <Grid item xs={4}>
              <Typography variant="h6">Currency</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Price</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Change%</Typography>
            </Grid>
          </Grid>

          {apiCurrencyName ? (
            apiCurrencyName?.map((item) => (
              <Grid container textAlign="center" sx={{ color: "#041562" }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">{item}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">
                    {currencyExchangeDetails?.[item]?.end_rate}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    color={
                      currencyExchangeDetails?.[item]?.change_pct < 0
                        ? "red"
                        : "limegreen"
                    }>
                    {currencyExchangeDetails?.[item]?.change_pct}%
                  </Typography>
                </Grid>
              </Grid>
            ))
          ) : (
            <NoData />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Currency;
