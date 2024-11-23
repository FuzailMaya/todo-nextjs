import React from 'react'
import {TodoItemT} from '../types/todo'
import TodoItemComponent from './TodoItem';

interface TodoListProps{
    todos: TodoItemT[];
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoList = ({todos,toggleTodo, deleteTodo}:TodoListProps) => {
  return (
    <ul className='space-y-2'>
        {todos.map((todo)=>(

            <TodoItemComponent key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))
             
        }

    </ul>

    )
}

export default TodoList