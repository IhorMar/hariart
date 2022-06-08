import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { addOrReplace } from "../utils/CollectionUtils";

const initialState = {paintingsGroup: []};

export const updatePage = createAction("updatePageNumber");

export const picturesGroup = createReducer(initialState, {
  [updatePage]: (state, { payload }) => {
    return {...state,
      paintingsGroup: addOrReplace(
      current(state).paintingsGroup,
      { category: payload.category, page: payload.page },
      "category"
    )};
  },
});
