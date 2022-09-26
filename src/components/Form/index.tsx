import { useState } from 'react'

import style from './style.module.css'

type Task = {
  title: string;
  description: string;
}

export default function Form({newTask, task, setTask}: any){

  return(
    <form onSubmit={newTask}>
        <input
          type='text'
          placeholder='Add a new task'
          value={task.title}
          onChange={ e =>
            setTask({ title: e.target.value, description: task.description })
          }
        />
        <textarea
          placeholder='Add a description'
          value={task.description}
          onChange={ e =>
            setTask({ title: task.title, description: e.target.value })
          }
        />
        <button>Add</button>
      </form>
  )
}