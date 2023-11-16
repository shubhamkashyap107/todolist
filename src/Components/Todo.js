import React from 'react'
import { BsTrashFill } from 'react-icons/bs';

const Todo = ({todoItem,  deleteTodo, checkTodo}) => {

  function deleteTodoHandler(id){
    deleteTodo(id)
  }

  function inputChangeHandler(id){
    checkTodo(id)
  }

  return (
    <div>
      <li style={{textDecoration:`${todoItem.checked ? 'line-through' : ""}`}}>

      <div className="card" style={{maxWidth : "36rem"}}>

      <div className="card-body">
        <p className="card-text"><input type="checkbox" onChange={() => {inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked} style={{marginRight:"5px"}} />{todoItem.task}<span onClick={() => deleteTodoHandler(todoItem.id)} style={{marginLeft:"5px"}}>< BsTrashFill/></span></p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        
        
      </div>
</div>

      </li>
    </div>
  )
}

export default Todo
