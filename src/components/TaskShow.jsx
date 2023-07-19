import React from 'react'

const TaskShow = ({task, onDelete}) => {

  const handledeleteClick = () => {
    onDelete(task.id)
  }
    
  return (
    <div className='task-show'>
        <h3 className='task-title'>Task:</h3>
        <p>{task.title}</p>

        <h3>Description:</h3>
        <p className='desc-text'>{task.desc}</p>

        <div>
            <button onClick={handledeleteClick} className='btn-sil'>Delete</button>
            <button className='btn-edit'>Edit</button>
        </div>
    </div>
  )
}

export default TaskShow