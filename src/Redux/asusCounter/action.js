import { ADECREMENT, AINCREMENT } from "./actionType";

export const increment = () => {
  return {
    type: AINCREMENT,
    // payload: value,
  };
};
export const decrement = () => {
  return {
    type: ADECREMENT,
    // payload: value,
  };
};
