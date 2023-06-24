export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// En types.ts
export interface CounterState {
  count: number;
}
export interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
  payload: number;
}

export interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
  payload: number;
}

export type CounterAction = IncrementCounterAction | DecrementCounterAction;
