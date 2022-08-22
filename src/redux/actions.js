export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CHECKED_TODO = "CHECKED_TODO";

export const ADD_UPDATE_EDIT = "ADD_UPDATE_EDIT";
export const REMOVE_EDIT = "REMOVE_EDIT";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deletedTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function checkedTodo(todoId) {
  return {
    type: CHECKED_TODO,
    payload: todoId,
  };
}

export function addUpdateEdit(todo) {
  return {
    type: ADD_UPDATE_EDIT,
    payload: todo,
  };
}

export function removeEdit() {
  return {
    type: REMOVE_EDIT,
  };
}
