import axios from "axios";

// const ENV = process.env.WEATHER_URL;
// console.log(ENV);

export function getCurrencyHttp(props) {
  return axios.request({
    headers: {
      apikey: "OYQ3hUERt8kZ6JTkzk7OH6yeIZf4s90j",
    },
    method: "get",
    url: `https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2021-05-14&end_date=2021-06-12&base=${props}`,
  });
}
