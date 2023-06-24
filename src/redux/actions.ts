import { ActionTypes } from "./actionsTypes";

export const incrementCounter = (numero: number) => {
  return { type: ActionTypes.INCREMENT_COUNTER, payload: numero };
};

export const decrementCounter = (numero: number) => {
  return { type: ActionTypes.DECREMENT_COUNTER, payload: numero };
};
