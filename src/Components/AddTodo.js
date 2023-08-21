import React, { useState } from 'react'

export const AddTodo = (props) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const submit = (e) => {
    e.preventDefault();
    if(!title || !desc)
    {alert("Please fill all the details.")}
    else
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
}

return (
    <div className='container my-3'>
        <h3>Add a todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
)
}
