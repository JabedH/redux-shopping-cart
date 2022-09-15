import { CDECREMENT, CINCREMENT } from "./canonAtionType";

export const canonIncrement = () => {
  return {
    type: CINCREMENT,
    // payload: value,
  };
};
export const canonDecrement = () => {
  return {
    type: CDECREMENT,
    // payload: value,
  };
};
