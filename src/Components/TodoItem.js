import React from 'react'

export default function TodoItem({todo , onDelete}) {
  return (
    <div>
      <p>{todo.sno}</p>
      <h6>{todo.title}</h6>
      <p>{todo.desc}</p> 
      <button className='btn btn-sm btn-danger py-1' onClick={() => {onDelete(todo)}}>Delete</button>
      <p><br></br></p>
    </div>
  );
}
