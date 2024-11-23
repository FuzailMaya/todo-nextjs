import React from 'react'
import { TodoItemT } from '../types/todo';

interface TodoItemProps {
    todo: TodoItemT;
    toggleTodo: (id:number) => void
    deleteTodo: (id:number) => void
}

const TodoItemComponent = ({todo, toggleTodo, deleteTodo}:TodoItemProps) => {

    return (
        <li className='flex items-center justify-between bg-white p-4 rounded-lg shadow'>
        <div className='flex items-center'>
            <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)} className="mr-2 form-checkbox h-5 w-5 text-blue-600"/>
            <span className={`${todo.completed? 'line-through text-gray-400':''}`}> {todo.text} </span>
        </div>
           <button type='button' onClick={()=>deleteTodo(todo.id)} className='text-red-500 hover:text-red-800' >Delete</button>
        </li>
    );
}

export default TodoItemComponent