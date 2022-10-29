import axios from "axios";

const ENV = process.env.REACT_APP_CURRENCY_URL;

export function getCurrencyHttp(props) {
  return axios.request({
    headers: {
      apikey: ENV,
    },
    method: "get",
    url: `https://api.apilayer.com/exchangerates_data/fluctuation?start_date=2021-05-14&end_date=2021-06-12&base=${props}`,
  });
}
