import { combineReducers } from "redux";
import counterReducer from "./asusCounter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
