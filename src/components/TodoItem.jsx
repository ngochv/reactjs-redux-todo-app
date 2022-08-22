import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkedTodo, deletedTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [isEditTodo, setIsEditTodo] = useState();
  const [name, setName] = useState();

  return (
    <li
      className={`list-group-item ${todo.completed && "list-group-item-success"
        }`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            defaultChecked={todo.completed}
            onClick={() => dispatch(checkedTodo({ id: todo.id }))}
          />
          {isEditTodo && (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {!isEditTodo && todo.name}
        </span>
        <div>
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              if (isEditTodo) {
                dispatch(updateTodo({ ...todo, name: name }));
              } else {
                setName(todo.name);
              }
              setIsEditTodo(!isEditTodo);
            }}
          >
            {isEditTodo ? "Update" : "edit"}
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
