import { useState } from 'react'
import './App.css'
import { ToDoList } from './ToDoList'
import { FormTask } from './FormTask'

function App() {
  return (
    <>
      <h1>ToDo list 📝</h1>
      <ToDoList />
    </>
  )
}

export default App
