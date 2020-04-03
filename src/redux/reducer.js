import { combineReducers } from "redux";
import HomePage, { name as nameOfHomepage } from "../pages/HomePage";
import setting from "../setting/reducer";

const rootReducers = combineReducers({
  [nameOfHomepage]: HomePage,
  setting: setting
});

export default rootReducers;
