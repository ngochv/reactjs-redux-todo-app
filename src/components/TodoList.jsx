import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useSelector(state => state)

  return (
    <div>
      <ul className='list-group'>
        {todos && todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
