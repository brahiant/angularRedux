import { createReducer, on } from "@ngrx/store";
import { decrement, reset } from "./items.action";
import { increment } from "./items.action";

export const initialState =0;
export const counterReducer = createReducer(
    initialState,
    on(increment, (state, payload) => state + payload.value),
    on(decrement, (state, payload) => state - payload.value),
    on(reset, (state, payload) => payload.value)
)