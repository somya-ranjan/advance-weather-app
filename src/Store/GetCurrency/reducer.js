import {
  GET_CURRENCY_START,
  SET_CURRENCY_DATA,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_FAIL,
} from "./actionLabel";

const INITIAL_STATE = {
  currencyData: null,
  isCurrencyDataLoading: false,
};

export const getCurrencyReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENCY_START:
      return {
        ...state,
        isCurrencyDataLoading: true,
      };
    case SET_CURRENCY_DATA:
      return {
        ...state,
        currencyData: payload,
        isCurrencyDataLoading: true,
      };
    case GET_CURRENCY_SUCCESS:
      return {
        ...state,
        isCurrencyDataLoading: false,
      };
    case GET_CURRENCY_FAIL:
      return {
        ...state,
        isCurrencyDataLoading: false,
      };

    default:
      return { ...state };
  }
};
