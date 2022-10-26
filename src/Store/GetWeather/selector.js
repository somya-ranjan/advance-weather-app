export const weatherDataLoading = (state) =>
  state?.getWeatherReducer?.isWeatherDataLoading;
export const weatherDetails = (state) => state?.getWeatherReducer?.weatherData;
