import { CDECREMENT, CINCREMENT } from "./canonAtionType";

export const canonIncrement = () => {
  return {
    type: CINCREMENT,
  
  };
};
export const canonDecrement = () => {
  return {
    type: CDECREMENT,
    
  };
};
