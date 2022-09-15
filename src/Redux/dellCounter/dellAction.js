import { DDECREMENT, DINCREMENT } from "./dellActionType";


export const dellIncrement = () => {
  return {
    type: DINCREMENT,
    // payload: value,
  };
};
export const dellDecrement = () => {
  return {
    type: DDECREMENT,
    // payload: value,
  };
};
