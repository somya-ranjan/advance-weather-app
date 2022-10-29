import axios from "axios";

const ENV = process.env.REACT_APP_WEATHER_URL;

export function getWeatherHttp(props) {
  return axios.request({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${props}&units=metric&APPID=${ENV}
    `,
  });
}
