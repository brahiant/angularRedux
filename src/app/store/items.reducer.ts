import { createReducer, on } from "@ngrx/store";
import { decrement, reset } from "./items.action";
import { increment } from "./items.action";

export const initialState =0;
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
)