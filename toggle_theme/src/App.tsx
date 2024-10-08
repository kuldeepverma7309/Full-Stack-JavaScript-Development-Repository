import React, { useState } from 'react'


const App = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  const theme = {
    backgroundColor: toggle ? 'white' : 'black',
    color: toggle ? 'black' : 'white',
  }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col' style={theme}>
      <nav className='flex justify-center items-center gap-20 shadow-md '>
        <ul className='flex space-x-4'>
          <li className='my-3'>
            <a href='#' className='text-blue-500 hover:text-blue-700'>Home</a>
          </li>
          <li className='my-3'>
            <a href='#' className='text-blue-500 hover:text-blue-700'>About</a>
          </li>
          <li className='my-3'>
            <a href='#' className='text-blue-500 hover:text-blue-700'>Contact</a>
          </li>
        </ul>
        <div>
          <button className='ml-auto mr-4 bg-blue-500 hover:bg-blue-700
          text-white font-bold py-2 px-4 rounded' 
          onClick={() => setToggle(!toggle)}>Toggle </button>
        </div>
      </nav>
      <div className='flex flex-1 justify-center items-center'>
        <p className='w-fit text-3xl font-semibold'>
          Theme: {toggle ? <span>Light theme</span> : <span>Dark theme</span>}
        </p>
      </div>
    </div>
  )
}

export default App