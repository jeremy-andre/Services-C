import { ActionTypes } from "./actionsTypes";
import { Item } from "./types";

//--Counter_Actions----------------------------------
export const incrementCounter = (numero: number) => {
  return { type: ActionTypes.INCREMENT_COUNTER, payload: numero };
};

export const decrementCounter = (numero: number) => {
  return { type: ActionTypes.DECREMENT_COUNTER, payload: numero };
};

//--Cart_Actions-------------------------------------

export const addToCart = (item: Item) => {
  return { type: ActionTypes.ADD_TO_CART, payload: item };
};

export const PopToCart = (itemId: number) => {
  return { type: ActionTypes.POP_TO_CART, payload: itemId };
};

//--Items_Actions------------------------------------

export const uploadItems = (item: Item[]) => {
  return { type: ActionTypes.UPLOAD_ITEMS, payload: item };
};
