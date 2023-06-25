import { ActionTypes } from "../actionsTypes";
import { ItemsState, ItemsAction } from "../types";

const initialState: ItemsState = {
  items: [],
};

export const itemsReducer = (state = initialState, action: ItemsAction) => {
  switch (action.type) {
    case ActionTypes.UPLOAD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
