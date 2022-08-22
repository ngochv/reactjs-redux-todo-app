import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  return (
    <div>
      <ul className='list-group'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default TodoList
