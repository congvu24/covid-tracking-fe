import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducer";
import sagas from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducers,
  {},
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(sagas);
export default store;
