import { DDECREMENT, DINCREMENT } from "./dellActionType";

const initialState = {
  value: 3,
};
const dellCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};
export default dellCounterReducer;
