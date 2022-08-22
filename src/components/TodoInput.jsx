import React from 'react'

function TodoInput() {
  return (
    <form className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
      ></input>

      <button type='submit' className='btn btn-primary mb-2'>
        Submit
      </button>
    </form>
  )
}

export default TodoInput
