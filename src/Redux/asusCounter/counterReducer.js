import { ADECREMENT, AINCREMENT } from "./actionType";

const initialState = {
  value: 20,
  value1: 0,
 
};

const counterReducer = (
  state = initialState,

  action
) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        value: state.value - 1,
        value1: state.value1 + 1,
      };
    case ADECREMENT:
      return {
        ...state,
        value: state.value + 1,
        value1: state.value1 - 1,
      };

    default:
      return state;
  }
};
export default counterReducer;
