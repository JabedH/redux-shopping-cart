import { DDECREMENT, DINCREMENT } from "./dellActionType";

const initialState = {
  value: 30,
  value1: 0,
};
const dellCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value - 1,
        value1: state.value1 + 1,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value + 1,
        value1: state.value1 - 1,
      };

    default:
      return state;
  }
};
export default dellCounterReducer;
