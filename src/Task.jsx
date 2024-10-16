import React from 'react'

export const Task = ({ name, status, completed, deleteTask }) => {

    return (
        <>
            <p>{name}</p>
            <div>
                <button
                style={{ backgroundColor: status === 'completed' ? 'green' : 'initial' }}
                onClick={completed}>
                    {status === 'completed' ? 'Completed' : 'Done'}
                    </button>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </>
    )
}
