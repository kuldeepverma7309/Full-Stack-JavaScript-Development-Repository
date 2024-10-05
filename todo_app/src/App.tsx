import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string,
  title: string,
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>()
  const [todo, setTodo] = useState<string>('')

  function handleDelete(id: string) {
    const newTodos = todos?.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  function handleEdit(id: string) {
    const newTodos = todos?.map(todo => {
      if (todo.id === id) {
        const newTitle = prompt('Enter new title') || ''
        return { ...todo, title: newTitle }
      }
      return todo
    })
    setTodos(newTodos)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (todo.length === 0) return
    const newTodo: Todo = {
      id: uuidv4(),
      title: todo
    }
    setTodos([...todos || [], newTodo])
    setTodo('')
  }

  return (
    <div className='w-screen min-h-screen bg-slate-700 flex justify-center items-center flex-col gap-3'>
      <h1 className='text-white font-semibold text-6xl mb-6'>Todo App</h1>
      <div className='rounded-md border border-yellow-100 flex justify-center items-center md:min-w-[40%] w-96'>
       <form className='w-full flex' onSubmit={handleSubmit}>
       <input
          type='text'
          placeholder='Add a todo'
          className='py-2 px-3 w-[80%] outline-none font-medium'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='bg-green-600 py-2 px-3 text-yellow-50 font-medium text-center w-[20%]'type='submit'>Add</button>
       </form>
      </div>
      {
        todos && todos.length>0 && (
          <div className='w-full flex flex-col justify-center bg-white space-y-3 rounded-2xl py-3 px-3 items-center mt-32 shadow-2xl mx-auto md:w-[40%] min-h-32'>
        {todos?.map((todo, index) => (
          <div key={index} className='flex justify-between items-center bg-slate-800 text-white py-2 px-3 rounded-md md:w-full w-96 hover:shadow-2xl'>
            <p>{todo.title}</p>
            <div className='flex gap-5'>
              <button className='bg-red-600 py-1 px-2 text-yellow-50 font-medium text-center' onClick={() => handleDelete(todo.id)}>Delete</button>
              <button className='bg-green-800 py-1 w-20 text-yellow-50 font-medium text-center' onClick={() => handleEdit(todo.id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
        )
      }

    </div>
  )
}

export default App