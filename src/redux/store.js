import { createStore } from "redux";
import { reducer, reducerEdit } from "./reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  todos: reducer,
  edit: reducerEdit,
});

export const store = createStore(allReducers);
