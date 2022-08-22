import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  checkedTodo,
  addUpdateEdit,
  deletedTodo,
  removeEdit,
  updateTodo,
} from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const editTodo = useSelector((state) => state.edit);

  const isEditTodo = (todo) => {
    if (Object.keys(editTodo).length !== 0 && editTodo?.id === todo.id) {
      return true;
    }
    return false;
  };

  return (
    <li
      className={`list-group-item ${todo.completed && "list-group-item-success"}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            defaultChecked={todo.completed}
            onClick={() => dispatch(checkedTodo({ id: todo.id }))}
          />
          {isEditTodo(todo) && (
            <input
              type="text"
              className="form-control"
              value={editTodo.name}
              onChange={(event) =>
                dispatch(
                  addUpdateEdit({ id: todo.id, name: event.target.value })
                )
              }
            />
          )}
          {!isEditTodo(todo) && todo.name}
        </span>
        <div>
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              if (isEditTodo(todo)) {
                dispatch(updateTodo(editTodo));
                dispatch(removeEdit());
              } else {
                dispatch(addUpdateEdit(todo));
              }
            }}
          >
            {isEditTodo(todo) ? "Update" : "edit"}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deletedTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
