import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function TodoInput() {
  const [name, setName] = useState();
  let dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (name) {
      dispatch(
        addTodo({
          name: name,
        })
      );
    }
    setName('');
  };

  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
        onChange={(event) => setName(event.target.value)}
        value={name}
      ></input>

      <button type='submit' className='btn btn-primary mb-2'>
        Submit
      </button>
    </form>
  )
}

export default TodoInput
