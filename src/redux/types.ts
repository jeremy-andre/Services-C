import { ActionTypes } from "./actionsTypes";

//--Counter_Types------------------------------------
export interface CounterState {
  count: number;
}

export interface IncrementCounterAction {
  type: typeof ActionTypes.INCREMENT_COUNTER;
  payload: number;
}

export interface DecrementCounterAction {
  type: typeof ActionTypes.DECREMENT_COUNTER;
  payload: number;
}

export type CounterAction = IncrementCounterAction | DecrementCounterAction;

//--Cart_Types---------------------------------------
export interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface CartState {
  cart: Item[];
}

export interface AddToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: Item;
}

export interface PopToCartAction {
  type: typeof ActionTypes.POP_TO_CART;
  payload: number;
}

export type CartAction = AddToCartAction | PopToCartAction;

//--Items_Types--------------------------------------
export interface ItemsState {
  items: Item[];
}

export interface uploadItemsAction {
  type: typeof ActionTypes.UPLOAD_ITEMS;
  payload: [];
}

export type ItemsAction = uploadItemsAction;
