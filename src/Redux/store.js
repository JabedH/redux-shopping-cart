import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// middle ware
const counterLogger = (store) => (next) => (action) => {
  const upcomingState = [action].reduce(rootReducer, store.getState());

  if (
    upcomingState.counter.value >= 0 &&
    upcomingState.canonCounter.value >= 0 &&
    upcomingState.dellCounter.value >= 0
  ) {
    return next(action);
  }
};
const store = createStore(rootReducer, applyMiddleware(counterLogger));
export default store;
