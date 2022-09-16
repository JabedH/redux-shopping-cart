import { CDECREMENT, CINCREMENT } from "./canonAtionType";

const initialState = {
  value: 72,
  value1: 0,
};
const canonCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      return {
        ...state,
        value: state.value - 1,
        value1: state.value1 + 1,
      };
    case CDECREMENT:
      return {
        ...state,
        value: state.value + 1,
        value1: state.value1 - 1,
      };

    default:
      return state;
  }
};
export default canonCounterReducer;
