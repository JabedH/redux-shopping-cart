import { ADECREMENT, AINCREMENT } from "./actionType";

export const increment = () => {
  return {
    type: AINCREMENT,
   
  };
};
export const decrement = () => {
  return {
    type: ADECREMENT,
    
  };
};
