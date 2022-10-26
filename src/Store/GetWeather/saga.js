import { call, takeLatest, put } from "redux-saga/effects";
import { setWeatherData } from "./action";
import { GET_WEATHER_START } from "./actionLabel";
import { getWeatherHttp } from "./service";

function* getWeatherSaga(action) {
  try {
    const response = yield call(getWeatherHttp, action.payload);
    const { data } = response;

    if (response) {
      yield put(setWeatherData(data));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: saga.js ~ line 9 ~ function*getWeatherSaga ~ error",
      error
    );
  }
}

function* watcher() {
  yield takeLatest(GET_WEATHER_START, getWeatherSaga);
}

export default watcher;
