import { randomUUID } from 'crypto'
import { useState } from 'react'

import Form from '../components/Form'
import Tasks from '../components/Tasks'

import style from '../styles/index.module.css'

type Task = {
  title: string;
  description: string;
  completed: boolean;
}

export default function Home(){
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false })
  const [tasks, setTasks] = useState<Task[]>([])

  const newTask = (e: any) => {
    e.preventDefault()
    if (task.title == ''){
      alert('Write a title')
    } else setTasks([...tasks, task])
    setTask({ title: '', description: '', completed: false })
  }

  const deleteTask = (title: any) => {  
    setTasks( tasks.filter(task => task.title !== title) )
  }

  const editTask = (itemx: any) => {
    const newTasks:any = tasks.map(item => {
      if (item.title === itemx.title){
        return {
          ...item,
          title: prompt('name'),
          description: prompt('description')
        }
      }
      return item
    })
    setTasks(newTasks)
  }

  const completed = (itemx: any) => {
    const isCompleted:any = tasks.map(item => {
      if (item.title === itemx.title){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    setTasks(isCompleted)
  }

  return (
    <div className='container'>
      <Form
        newTask={newTask}
        task={task}
        setTask={setTask}
      />

      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        completed={completed}
      />
    </div>
  )
}