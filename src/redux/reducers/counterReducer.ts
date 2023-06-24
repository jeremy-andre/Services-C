import { ActionTypes } from "../actionsTypes";
import { CounterState, CounterAction } from "../types";

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    case ActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
