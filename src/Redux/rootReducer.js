import { combineReducers } from "redux";
import counterReducer from "./asusCounter/counterReducer";
import canonCounterReducer from "./canonCounter/canonCounterReducer";
import dellCounterReducer from "./dellCounter/dellCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dellCounter: dellCounterReducer,
  canonCounter: canonCounterReducer,
});
export default rootReducer;
