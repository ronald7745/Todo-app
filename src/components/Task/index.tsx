import style from './style.module.css'

export default function Task({item, deleteTask, editTask, completed}:any){
  return(
    <div className={style.task}>
      <div className={style.content}>
        <h4 className={item.completed ? style.completed : style.unCompleted}>{item.title}</h4>
        <p>{item.description}</p>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.delete} onClick={()=> deleteTask(item.title)}></button>
        <button className={style.edit} onClick={() => editTask(item)}></button>
        <button className={style.complete} onClick={() => completed(item)}></button>
      </div>
    </div>
  )
}