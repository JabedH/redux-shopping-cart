import { DDECREMENT, DINCREMENT } from "./dellActionType";

export const dellIncrement = () => {
  return {
    type: DINCREMENT,
  };
};
export const dellDecrement = () => {
  return {
    type: DDECREMENT,
  };
};
