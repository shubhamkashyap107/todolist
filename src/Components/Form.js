import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';

const Form = (props) => {

    let[input, setInput] = useState('');



    function inputChangeHandler(e)
    {
        if(e.target.value.trim() !== '')
        {
            setInput(e.target.value)
        }
    }

    function formSubmitHandler(e)
    {
        e.preventDefault();
        // if(input.trim().length === 0){
        //     // setIsValid(false);
        //     return;
        // }
        // const newTodo = {
        //     id : uuid(),
        //     task: input,
        //     checked: false
        // }
        // props.addTodo(newTodo);
        // setInput('')
        if(input !== '')
        {
            const newTodo = {
                id : uuid(),
                task : input
            }

            props.addTodo(newTodo);
            setInput('');
        } 
    }

  return (
    <form onSubmit={formSubmitHandler} className='mx-auto mt-3' style={{maxWidth:"32rem", border:"1px solid lightgrey", padding:"10px", borderRadius:'5px'}}>
        <div className="mb-3">
            <input onChange={inputChangeHandler} className="form-control" id="exampleFormControlTextarea1"  rows="3" placeholder='Add task..' value={input} />
        </div>
        <button type="submit" className="btn btn-success" >Add Task</button>
    </form>
//     <form onSubmit={formSubmitHandler}>
//     <input onChange={inputChangeHandler} type='text' placeholder='Enter Task' value={input} />
//    </form>
  )
}

export default Form