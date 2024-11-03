import React from 'react'
// import store from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector((state)=>state.todos.todos) || []
  const dispatch = useDispatch()
 
  return (
    <>
    <div>Todos</div>

    {todos.map((todo)=>(
        <li key={todo.id} className='flex rounded-btn text-primary-content bg-white md:w-1/2 w-full justify-between p-4 items-start'>
            {todo.text}
        <button className="btn btn-error bg-red-500 px-8 text-white" onClick={()=>dispatch(deleteTodo(todo.id))}> X</button>
        </li>
        
    ))}

    </>
  );
};

export default Todos