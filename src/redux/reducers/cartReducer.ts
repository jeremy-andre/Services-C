import { ActionTypes } from "../actionsTypes";
import { CartState, CartAction } from "../types";

const initialState: CartState = {
  cart: [],
};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // Lógica para agregar un elemento al carrito
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionTypes.POP_TO_CART:
      // Lógica para eliminar un elemento del carrito
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    default:
      return state;
  }
};
