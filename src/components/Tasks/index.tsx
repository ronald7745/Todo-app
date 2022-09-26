import Task from '../Task'

import style from './style.module.css'

export default function Tasks({tasks, deleteTask, editTask, completed}:any){
  return(
    <div className={style.tasks}>
      {
        tasks.map((item: any, index:number) =>(
          <Task
            key={index}
            item={item}
            deleteTask={deleteTask}
            editTask={editTask}
            completed={completed}
          />
        ))
      }
    </div>
  )
}