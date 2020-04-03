import * as actions from "./redux/actions";
import rootSaga from "./redux/saga/index";
import reducer, { name } from "./redux/reducer";

export { name, actions, rootSaga };

export default reducer;
