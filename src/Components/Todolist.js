 import React from 'react'
import Todo from './Todo'
import "./Todolist.css"
 const Todolist = ({todos, deleteTodo, checkTodo}) => {

    const allTodos = todos.map( (item, index) => {
        return <Todo  key={index} todoItem={item} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    })

   return (
     <div>
       <ul className='todo-list'>
        {allTodos}
       </ul>
     </div>
   )
 }
 
 export default Todolist
 