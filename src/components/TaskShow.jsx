import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

const TaskShow = ({task, onDelete, onUpdate}) => {

  const [showEdit, setshowEdit] = useState(false)

  const handledeleteClick = () => {
    onDelete(task.id)
  }
  const handleEditClick = () => {
    setshowEdit(!showEdit)
  }
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setshowEdit(false)
    onUpdate(id, updatedTitle, updatedDesc)
  }
    
  return (
    <div className='task-show'>

        {showEdit ? (<TaskCreate task={task} taskFormUpdate = {true} onUpdate={handleSubmit}/>) : (
          <div>
            <h3 className='task-title'>Task:</h3>
            <p>{task.title}</p>

            <h3>Description:</h3>
            <p className='desc-text'>{task.desc}</p>

            <div>
              <button onClick={handledeleteClick} className='btn-sil'>Delete</button>
              <button onClick={handleEditClick}  className='btn-edit'>Edit</button>
            </div>

          </div>)
        }
    </div>
  )
}

export default TaskShow