import React from 'react'
import {TodoItemT} from '../types/todo'
import TodoItemComponent from './TodoItem';

interface TodoListProps{
    todos: TodoItemT[];
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
    updateTodo: (id:number, newText:string)=>void
}

const TodoList = ({todos,toggleTodo, deleteTodo, updateTodo}:TodoListProps) => {
  return (
    <ul className='space-y-2'>
        {todos.map((todo)=>(

            <TodoItemComponent key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))
             
        }

    </ul>

    )
}

export default TodoList