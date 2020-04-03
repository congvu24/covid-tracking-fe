import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "../../../../apis/HomePage";
import { takeAction } from "../../../../redux/takeAction";

export function* handleGetOverView(action) {
  try {
    const data = yield call(API.getOverView);
    yield put(actions.getOverViewSuccess(data));
  } catch (err) {
    yield put(actions.getOverViewFail(err));
  }
}

export function* handleGetAllData(action) {
  try {
    const data = yield call(API.getAllCountry);
    yield put(actions.getAllDataSuccess(data));
  } catch (err) {
    yield put(actions.getAllDataFail(err));
  }
}
export function* handleGetNews(action) {
  try {
    const data = yield call(API.getNews);
    yield put(actions.getNewsSuccess(data));
  } catch (err) {
    yield put(actions.getNewsFail(err));
  }
}
export function* getOverView() {
  yield takeAction(actions.getOverView, handleGetOverView);
}
export function* getAllData() {
  yield takeAction(actions.getAllData, handleGetAllData);
}
export function* getNews() {
  yield takeAction(actions.getNews, handleGetNews);
}
export default [getOverView, getAllData, getNews];
