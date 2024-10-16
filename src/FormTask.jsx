import React, {useState} from 'react'

export const FormTask = ({addtask}) => {

  const [newtask, setNewTask] = useState('')

  const handlenewtask = () => {
    if (newtask) {
      addtask(newtask)
      setNewTask('')
    }
  }
  return (
    <div>
        <label htmlFor="add_task">Add new task</label>
        <input type='text' id='add_task' value={newtask} onChange={(e) => setNewTask(e.target.value)} />
        <button
            onClick={handlenewtask}>Add task</button>
    </div>
  )
}