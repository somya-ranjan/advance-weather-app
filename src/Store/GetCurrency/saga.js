import { call, takeLatest, put } from "redux-saga/effects";
import { setCurrencyData } from "./action";
import { GET_CURRENCY_START } from "./actionLabel";
import { getCurrencyHttp } from "./service";

function* getCurrencySaga(action) {
  try {
    const response = yield call(getCurrencyHttp, action.payload);
    const { data } = response;

    if (response) {
      yield put(setCurrencyData(data));
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: saga.js ~ line 9 ~ function*getCurrencySaga ~ error",
      error
    );
  }
}

function* watcher() {
  yield takeLatest(GET_CURRENCY_START, getCurrencySaga);
}

export default watcher;
