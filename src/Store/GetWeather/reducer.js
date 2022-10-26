import {
  GET_WEATHER_START,
  SET_WEATHER_DATA,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
} from "./actionLabel";

const INITIAL_STATE = {
  weatherData: null,
  isWeatherDataLoading: false,
};

export const getWeatherReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WEATHER_START:
      return {
        ...state,
        isWeatherDataLoading: true,
      };
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: payload,
        isWeatherDataLoading: true,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        isWeatherDataLoading: payload,
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        isWeatherDataLoading: false,
      };

    default:
      return { ...state };
  }
};
