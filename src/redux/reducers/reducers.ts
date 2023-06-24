import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { CounterState } from "../types";
// import { cartReducer } from "./cartReducer";

// Define una interfaz para el estado global
export interface RootState {
  counter: CounterState;
  // cart: CartState;
}

// Combina los reducers individuales en un reducer raíz
const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  // cart: cartReducer,
});

export default rootReducer;
