import { ADECREMENT, AINCREMENT } from "./actionType";

export const increment = (value) => {
  return {
    type: AINCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: ADECREMENT,
    payload: value,
  };
};
