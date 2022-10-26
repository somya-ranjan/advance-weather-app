export const currencyDataLoading = (state) =>
  state?.getCurrencyReducer?.isCurrencyDataLoading;
export const currencyDetails = (state) =>
  state?.getCurrencyReducer?.currencyData?.rates;
