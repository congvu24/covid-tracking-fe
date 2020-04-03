import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  theme: false,
  activeFocus: {
    name: "World",
    confirmed: 10000,
    deaths: 10000,
    long: 10,
    lat: 10
  },
  showActive: false
};
export default handleActions(
  {
    [actions.actionToogle]: (state, action) => {
      return {
        ...state,
        theme: !state.theme
      };
    },
    [actions.changeFocus]: (state, action) => {
      return {
        ...state,
        activeFocus: action.payload,
        showActive: true
      };
    },
    [actions.closeActive]: (state, action) => {
      return {
        ...state,
        showActive: false
      };
    }
  },
  initialState
);

// export const name = "homepage";
