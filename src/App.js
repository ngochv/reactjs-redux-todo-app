import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
