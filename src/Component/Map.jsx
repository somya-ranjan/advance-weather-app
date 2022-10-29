import React from "react";
import { Grid, Paper } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { weatherDetails } from "../Store/GetWeather/selector";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "512px",
  height: "304px",
  borderRadius: "5px",
};
function Map() {
  // initial state
  const ENV = process.env.REACT_APP_MAP_URL;

  // // redux state
  const weatherData = useSelector(weatherDetails);

  const center = {
    lat: weatherData?.city?.coord?.lat,
    lng: weatherData?.city?.coord?.lon,
  };
  return (
    <Paper sx={{ height: "40vh" }}>
      <Grid container>
        <Grid item xs={12}>
          <LoadScript googleMapsApiKey={ENV}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={9}
            />
          </LoadScript>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Map;
