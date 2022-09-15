import { ADECREMENT, AINCREMENT } from "./actionType";

const initialState = {
  value: 2,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case ADECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};
export default counterReducer;
