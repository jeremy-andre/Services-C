import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { cartReducer } from "./cartReducer";
import { CounterState, CartState, ItemsState } from "../types";
import { itemsReducer } from "./itemsReducer";

// Define una interfaz para el estado global
export interface RootState {
  counter: CounterState;
  cart: CartState;
  items: ItemsState;
}

// Combina los reducers individuales en un reducer raíz
const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  cart: cartReducer,
  items: itemsReducer,
});

export default rootReducer;
