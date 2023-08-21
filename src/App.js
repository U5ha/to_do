import './App.css';
import React from 'react'
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import { useState, useEffect } from 'react';
import { AddTodo } from './Components/AddTodo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from './Components/About';

function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    alert("Are you sure ? ");
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(title, desc) => {
    alert("Adding Todo");
    let sno;
    if(todos.length===0)
    sno=1;
    else
    sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    

  }

 const [todos,setTodos] = useState(initTodo);

 
 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])


  return (
    
    <>
    <BrowserRouter>
    <Header title = "My-Todo-List"/>
    <Routes>
      <Route exact path='/' element = {
        <div>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </div>
      } />

        <Route exact path='/about' element = {
          <About />
        } />
    
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App;
