import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className='flex w-full h-screen flex-col items-center gap-8 p-8 justify-start'>
      
      <h1 className='text-3xl font-bold tracking-wider'>MERI TODO SITE</h1>
      <div className='container flex flex-col gap-8 items-center justify-center'>
      <AddTodo />
      <Todos />
      </div>
    </div>
  )
}

export default App