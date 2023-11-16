import React, { useEffect, useState } from 'react'
// import {v4 as uuid} from 'uuid';
import Todolist from './Todolist';
import Form from './Form';

const Todoapp = () => {

  let dummyArray = JSON.parse(window.localStorage.getItem('todos') || "[]");
  let[todos, setTodos] = useState(dummyArray);
   

      const addTodo = (todo) => {
        setTodos([...todos, todo]);
      }

    useEffect( () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  } , [todos])

    const deleteTodo = (id) => {
      setTodos( (arr) => {
        return arr.filter((item) => item.id != id)
      })
    }

    function checkTodo(id){
      setTodos(
        (arr) => {
          return arr.map((item) => item.id === id ? {...item, checked : !item.checked} : item)
        }
      )
    }

  return (
    <div>
      <Form addTodo = {addTodo} />
      <Todolist todos = {todos} deleteTodo = {deleteTodo} checkTodo={checkTodo} />
    </div>
  )
}

export default Todoapp
