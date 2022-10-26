import { combineReducers, createStore, applyMiddleware } from "redux";
import * as reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  ...reducers,
});

const middlewareEnhancer = applyMiddleware(sagaMiddleware);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
