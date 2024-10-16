import React, { useState } from 'react'
import { Task } from './Task'
import { FormTask } from './FormTask'

export const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { name: 'Task 1', status: 'pending' },
        { name: 'Task 2', status: 'pending' },
        { name: 'Task 3', status: 'pending' },
    ])

    const addtask = (taskname) => {
      setTasks ([...tasks, {name: taskname, status: 'pending'}])
    }
    const completed = (index) => {
      const updatedTasks = [...tasks]
        updatedTasks[index].status = 'completed'
        setTasks(updatedTasks)
    }
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index)
        setTasks(updatedTasks)
    }

    return (
        <div>
            <h2>Tasks</h2>
            <FormTask addtask={addtask}/>
            {tasks.map((task, index) => (
                <Task key={index} name={task.name} status={task.status} completed={() => completed(index)}
                deleteTask={() => deleteTask(index)} />
            ))}

        </div>
    )
}