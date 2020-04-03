/**
 * @file init sagas
 */

import { all } from "redux-saga/effects";
import { rootSaga as Hompage } from "../pages/HomePage";
////////////////////////////////////////////////////////////////////////////////

export const defaultSagaLists = [Hompage];

export default function* rootSaga() {
  yield all(defaultSagaLists.map(saga => saga()));
}
