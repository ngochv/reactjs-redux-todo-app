import { v1 as uuid } from "uuid";

import {
  ADD_TODO,
  CHECKED_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_UPDATE_EDIT,
  REMOVE_EDIT,
} from "./actions";
import { todos } from "./states";

export const reducer = (state = todos, action) => {
  let newTodos;
  newTodos = [...state];

  switch (action.type) {
    case ADD_TODO:
      newTodos.push({
        id: uuid(),
        name: action.payload.name,
      });
      return newTodos;
    case DELETE_TODO:
      return newTodos.filter((t) => t.id !== action.payload);
    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
      }
      return newTodos;
    case CHECKED_TODO:
      newTodos = [...state];
      let indexChecked = -1;
      for (let i = 0; i < newTodos.length; i++) {
        indexChecked++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (indexChecked !== -1) {
        console.log(indexChecked);
        newTodos[indexChecked].completed = !newTodos[indexChecked].completed;
      }
      return newTodos;
    default:
      return state;
  }
};

export const reducerEdit = (state = {}, action) => {
  switch (action.type) {
    case ADD_UPDATE_EDIT:
      return { ...action.payload };
    case REMOVE_EDIT:
      return {};
    default:
      return state;
  }
};
