import getWeatherSaga from "./GetWeather/saga";
import getCurrencySaga from "./GetCurrency/saga";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([getWeatherSaga(), getCurrencySaga()]);
}
