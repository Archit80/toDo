import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';


const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
    <form  className="w-full md:w-1/2" name="todoform" onSubmit={addTodoHandler} action="">

    <input 
        name ="todo"
        type="text"
        placeholder="add new todo" 
        className="input input-bordered w-full " 
        value = {input}
        onChange={(e)=>setInput(e.target.value)}       
    
    />
   
    </form>
  )
}

export default AddTodo