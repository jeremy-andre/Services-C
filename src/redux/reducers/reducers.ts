import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// import { CartState, ItemsState } from "../types";
import itemsReducer from "./itemsReducer";

// Combina los reducers individuales en un reducer raíz
const rootReducer = combineReducers({
  cart: cartReducer,
  items: itemsReducer,
});

export default rootReducer;

// // Define una interfaz para el estado global
// export interface RootState {
//   cart: CartState;
//   items: ItemsState;
// }
