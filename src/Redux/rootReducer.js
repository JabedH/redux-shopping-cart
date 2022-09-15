import { combineReducers } from "redux";
import counterReducer from "./asusCounter/counterReducer";
import dellCounterReducer from "./dellCounter/dellCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dellCounter: dellCounterReducer,
});
export default rootReducer;
