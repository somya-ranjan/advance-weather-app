import axios from "axios";

// const ENV = process.env.WEATHER_URL;
// console.log(ENV);

export function getWeatherHttp(props) {
  return axios.request({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${props}&units=metric&APPID=aaa2f82a69c06ab16be84cc35449b6f2
    `,
  });
}
