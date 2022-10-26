import {
  GET_CURRENCY_START,
  SET_CURRENCY_DATA,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_FAIL,
} from "./actionLabel";

export const getCurrencyStart = (payload) => {
  return {
    type: GET_CURRENCY_START,
    payload,
  };
};
export const setCurrencyData = (payload) => {
  return {
    type: SET_CURRENCY_DATA,
    payload,
  };
};
export const getCurrencySuccess = (payload) => {
  return {
    type: GET_CURRENCY_SUCCESS,
    payload,
  };
};
export const getCurrencyFail = (payload) => {
  return {
    type: GET_CURRENCY_FAIL,
    payload,
  };
};
