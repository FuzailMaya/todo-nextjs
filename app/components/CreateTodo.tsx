"use client"

import React from 'react'
import { useState } from 'react'

interface CreateTodoProps{
  addTodo:(text:string)=>void
}

const CreateTodo = ({addTodo}:CreateTodoProps) => {
    const [text,setText]=useState('')

    const handleSubmit=(e:React.FormEvent)=>{
      e.preventDefault();
      if(text.trim()){
        addTodo(text)
        setText('')
      }
    }
  return (
    <form onSubmit={handleSubmit} className='mb-4'> 
        <div className="flex" >
        <input onChange={(e)=>setText(e.target.value)} type='text' value={text} placeholder='Add a New Todo' 
        className='flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
        
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-r-md  hover:bg-blue-600 '>Add</button>
      </div>
    </form>
  )
}

export default CreateTodo