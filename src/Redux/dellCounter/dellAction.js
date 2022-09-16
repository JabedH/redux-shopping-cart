import { DDECREMENT, DINCREMENT } from "./dellActionType";

export const dellIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
export const dellDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
