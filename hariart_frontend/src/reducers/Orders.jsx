import { createAction, createReducer, current } from "@reduxjs/toolkit";
import {
  removeIn,
  addOrUpdateInWith,
  updateInWith,
} from "../utils/CollectionUtils";

const initialState = { orders: [] };

export const updateOrder = createAction("updateOrder");
export const removeOrder = createAction("removeOrder");
export const addOrUpdateOrder = createAction("addOrUpdateOrder");

export const orders = createReducer(initialState, {
  [updateOrder]: (state, { payload }) => {
    return {
      ...state,
      orders: updateInWith(
        current(state).orders,
        { ref: payload.ref },
        "ref",
        "amount",
        (val) => { 
          switch (payload.act) {
            case("inc"): return val + 1;
            case("dec"): return val - 1;
            default: return payload.val
        }}
      ),
    };
  },
  [addOrUpdateOrder]: (state, { payload }) => {
    return {
      ...state,
      orders: addOrUpdateInWith(
        current(state).orders,
        { ref: payload.ref, amount: 1, name: payload.name },
        "ref",
        "amount",
        (amount) => amount + 1
      ),
    };
  },
  [removeOrder]: (state, { payload }) => {
    return {
      ...state,
      orders: removeIn(current(state).orders, payload.ref, "ref"),
    };
  },
});
