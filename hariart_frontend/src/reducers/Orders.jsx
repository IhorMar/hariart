import { createAction, createReducer, current } from "@reduxjs/toolkit";
import {
  removeIn,
  addOrUpdateInWith,
  updateInWith,
} from "../utils/CollectionUtils";
import { getOrders, setOrders } from "../utils/Storage";

const initialState = { orders: [] };

export const predefineOrder = createAction("predefineOrder")
export const updateOrder = createAction("updateOrder");
export const removeOrder = createAction("removeOrder");
export const addOrUpdateOrder = createAction("addOrUpdateOrder");

export const orders = createReducer(initialState, {
  [predefineOrder]: (state) => {
    return {...state, orders: getOrders()}
  },
  [updateOrder]: (state, { payload }) => {
    const ordersList = updateInWith(
      current(state).orders,
      { ref: payload.ref },
      "ref",
      "amount",
      (val) => {
        switch (payload.act) {
          case "inc":
            return val + 1;
          case "dec":
            return val - 1;
          default:
            return payload.val;
        }
      }
    );

    setOrders(ordersList);

    return {
      ...state,
      orders: ordersList,
    };
  },
  [addOrUpdateOrder]: (state, { payload }) => {
    const ordersList = addOrUpdateInWith(
      current(state).orders,
      { ref: payload.ref, amount: 1, name: payload.name },
      "ref",
      "amount",
      (amount) => amount + 1
    );

    setOrders(ordersList);

    return {
      ...state,
      orders: ordersList,
    };
  },
  [removeOrder]: (state, { payload }) => {
    const ordersList = removeIn(current(state).orders, payload.ref, "ref");

    setOrders(ordersList);

    return {
      ...state,
      orders: ordersList,
    };
  },
});
