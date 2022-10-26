import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { weatherDetails } from "../Store/GetWeather/selector";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getWeatherStart } from "../Store/GetWeather/action";
import ErrorModal from "./ErrorModal";

function Weather() {
  // // initial state
  const dispatch = useDispatch();

  // // redux state
  const weatherData = useSelector(weatherDetails);

  // // local state
  const [cordError, setCordError] = useState();

  // // function
  // get current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  };

  const successLocation = (position) => {
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getWeatherStart(data?.city));
      });
  };
  const errorLocation = (position) => {
    setCordError(position.message);
  };

  // lifeCycle
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {cordError ? (
        <ErrorModal message={cordError} />
      ) : (
        <Paper sx={{ minHeight: "85vh", color: "#041562" }}>
          <Stack textAlign="center" spacing={2}>
            <Typography variant="h3" fontWeight={700} pt={3}>
              <span
                style={{
                  color:
                    weatherData?.list[0].main.temp < 28 ? "#54B435" : "red",
                }}>
                <i className="fas fa-thermometer-three-quarters" />
                &nbsp;
                {weatherData?.list[0].main.temp || "N/A 😞"}&deg;C &nbsp;
              </span>
              <span>
                <i
                  className={`wi wi-${
                    weatherData?.list?.[0].weather?.[0].main === "Clear"
                      ? "day-sunny"
                      : weatherData?.list?.[0].weather?.[0].main === "Clouds"
                      ? "day-cloudy"
                      : weatherData?.list?.[0].weather?.[0].main === "Haze"
                      ? "fog"
                      : weatherData?.list?.[0].weather?.[0].main === "Rain"
                      ? "day-thunderstorm"
                      : "cloud"
                  }`}
                />
                &nbsp;
                {weatherData?.list?.[0].weather?.[0].main}{" "}
              </span>
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              <i className="fas fa-street-view" />{" "}
              {weatherData?.city?.name || "N/A 😞"} ,&nbsp;
              <span>{weatherData?.city?.country || "N/A 😞"}</span> &nbsp;||
              &nbsp;
              <span>
                <i className="fas fa-users" />{" "}
                {weatherData?.city?.population || "N/A 😞"}
              </span>
            </Typography>
          </Stack>
          <Grid container justifyContent="space-around" mt={5}>
            <Grid item xs={9} sm={3.5} md={3.5} mb={{ xs: 5, sm: 0 }}>
              <Typography
                variant="h5"
                sx={{ color: "#2146C7" }}
                fontWeight={500}>
                Weather Info
              </Typography>
              <Card className="weather_info">
                <Box>
                  <i className="fas fa-temperature-high" />
                  <Typography variant="h6">
                    {weatherData?.list[0].main.temp_max || "N/A 😞"}&deg;C
                    <br /> Max Temp
                  </Typography>
                </Box>
                <Box>
                  <i className="fas fa-temperature-low" />

                  <Typography variant="h6">
                    {weatherData?.list[0].main.temp_min || "N/A 😞"}&deg;C
                    <br /> Min Temp
                  </Typography>
                </Box>
                <Box>
                  <i className="wi wi-humidity" />
                  <Typography variant="h6">
                    {weatherData?.list[0].main.humidity || "N/A 😞"}
                    <br /> Humidity
                  </Typography>
                </Box>
                <Box>
                  <i className="wi wi-sunrise" />
                  <Typography variant="h6">
                    {`${moment(weatherData?.city?.sunrise)?.format(
                      "hh:mmA"
                    )}` || "N/A 😞"}
                    <br />
                    Sunrise
                  </Typography>
                </Box>
                <Box>
                  <i className="wi wi-sunset" />
                  <Typography variant="h6">
                    {`${moment(weatherData?.city?.sunset)?.format("hh:mmA")}` ||
                      "N/A 😞"}
                    <br /> Sunset
                  </Typography>
                </Box>
                <Box>
                  <i className="wi wi-fog" />
                  <Typography variant="h6">
                    {weatherData?.list[0].wind.speed || "N/A 😞"} <br /> Wind
                  </Typography>
                </Box>
                <Box>
                  <i className="wi wi-barometer" />
                  <Typography variant="h6">
                    {weatherData?.list[0].main.pressure || "N/A 😞"} <br />{" "}
                    Pressure
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={9} sm={7.5} md={7.5} className="forecast">
              <Card sx={{ maxHeight: "450px", overflowY: "auto" }}>
                {weatherData?.list?.slice(3, Infinity)?.map((item) => {
                  return (
                    <>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={4}>
                          <Typography variant="h6">
                            {`${moment(item?.dt_txt).format(
                              "DD/MM/YYYY, hh:mmA"
                            )}`}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h6">
                            {item.main.temp || "N/A 😞"}&deg;C
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h6">
                            <i
                              className={`wi wi-${
                                item.weather?.[0]?.main === "Clear"
                                  ? "day-sunny"
                                  : item.weather?.[0]?.main === "Clouds"
                                  ? "day-cloudy"
                                  : item.weather?.[0]?.main === "Haze"
                                  ? "fog"
                                  : item.weather?.[0]?.main === "Rain"
                                  ? "day-thunderstorm"
                                  : "cloud"
                              }`}
                            />
                            {item.weather?.[0]?.main || "N/A 😞"}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider />
                    </>
                  );
                })}
              </Card>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}

export default Weather;
