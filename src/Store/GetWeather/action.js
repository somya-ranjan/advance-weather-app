import {
  GET_WEATHER_START,
  SET_WEATHER_DATA,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
} from "./actionLabel";

export const getWeatherStart = (payload) => {
  return {
    type: GET_WEATHER_START,
    payload,
  };
};
export const setWeatherData = (payload) => {
  return {
    type: SET_WEATHER_DATA,
    payload,
  };
};
export const getWeatherSuccess = (payload) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload,
  };
};
export const getWeatherFail = (payload) => {
  return {
    type: GET_WEATHER_FAIL,
    payload,
  };
};
