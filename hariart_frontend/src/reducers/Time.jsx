import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { timeout: false };

export const isTimeout = createAction("setTimeout");

export const timeout = createReducer(initialState, {
  [isTimeout]: (state, { payload }) => {
    return { ...state, timeout: payload.timeout };
  },
});
