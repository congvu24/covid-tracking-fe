import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  allCountry: "",
  isLoading: false,
  overView: "",
  news: ""
};
export default handleActions(
  {
    [actions.getAllData]: (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    },
    [actions.getAllDataSuccess]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        allCountry: action.payload
      };
    },
    [actions.getAllDataFail]: (state, action) => {
      return {
        ...state,
        isLoading: false
      };
    },
    [actions.getOverView]: (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    },
    [actions.getOverViewSuccess]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        overView: action.payload
      };
    },
    [actions.getAllDataFail]: (state, action) => {
      return {
        ...state,
        isLoading: false
      };
    },
    [actions.getNews]: (state, action) => {
      return {
        ...state,
        isLoading: true
      };
    },
    [actions.getNewsSuccess]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        news: action.payload
      };
    },
    [actions.getNewsFail]: (state, action) => {
      return {
        ...state,
        isLoading: false
      };
    }
  },
  initialState
);

export const name = "homepage";
