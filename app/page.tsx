'use client'
import { useState } from 'react';
import { TodoItemT } from './types/todo'
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo"

export default function Home() {
  const[todos,setTodos]=useState<TodoItemT[]>([])
  let todoId=1;
 
  const addTodo = (text: string) => {
    const newTodo:TodoItemT={
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos,newTodo])
 }
  const toggleTodo=(id:number)=>{
    setTodos(
      todos.map((todo)=>todo.id===id? {...todo, completed: !todo.completed } : todo )
    )
  }
  const deleteTodo=(id:number)=>{
    setTodos(
      todos.filter((todo)=> todo.id!==id)
    )
  }
 
 


  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Todo App</h1>
        <CreateTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}
