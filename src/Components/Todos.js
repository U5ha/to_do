import React from 'react'
import TodoItem from './TodoItem'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-4'>TodosList</h3>
      { props.todos.length === 0 ? "No Todos in the List" :
      props.todos.map((todo) => {
      return ( <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
      </>)
      })
    }
      </div>
  );
}
