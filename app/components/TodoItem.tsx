import React from 'react'
import { TodoItemT } from '../types/todo';

interface TodoItemProps {
    todo: TodoItemT;
    toggleTodo: (id:number) => void
    deleteTodo: (id:number) => void
    updateTodo: (id:number, newText:string)=> void
}

const TodoItemComponent = ({todo, toggleTodo, deleteTodo, updateTodo}:TodoItemProps) => {
    
    const handleUpdate=(id:number)=>{
        const newText = prompt('Update Todo',todo.text)
        if(newText!==null && newText.trim()!==''){
            updateTodo(id,newText)
        }
    }

    return (
        <li className='flex items-center justify-between bg-white p-4 rounded-lg shadow'>
        <div className='flex items-center'>
            <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)} className="mr-2 form-checkbox h-5 w-5 text-blue-600"/>
            <span className={`${todo.completed? 'line-through text-gray-400':''}`}> {todo.text} </span>
        </div>
            <div>
                <button type='button' onClick={()=>handleUpdate(todo.id)} className='text-blue-500 hover:text-blue-800 mr-2'>Edit</button>
           <button type='button' onClick={()=>deleteTodo(todo.id)} className='text-red-500 hover:text-red-800' >Delete</button>
           </div>
        </li>
    );
}

export default TodoItemComponent