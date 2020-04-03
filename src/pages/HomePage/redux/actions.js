import { createAction } from "redux-actions";

export const getAllData = createAction("HOME_GET_ALL_DATA");
export const getAllDataFail = createAction("HOME_GET_ALL_DATA_FAIL");
export const getAllDataSuccess = createAction("HOME_GET_ALL_DATA_SUCCESS");
export const getOverView = createAction("HOME_GET_OVERVIEW");
export const getOverViewFail = createAction("HOME_GET_OVERVIEW_FAIL");
export const getOverViewSuccess = createAction("HOME_GET_OVERVIEW_SUCCESS");
export const getNews = createAction("HOME_GET_NEWS");
export const getNewsFail = createAction("HOME_GET_NEWS_FAIL");
export const getNewsSuccess = createAction("HOME_GET_NEWS_SUCCESS");
