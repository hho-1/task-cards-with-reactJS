import React from 'react'
import { useState } from 'react'

const TaskCreate = ({onCreate, task, taskFormUpdate, onUpdate}) => {
    const [title, setTitle] = useState(task ? task.title : '')
    const [desc, setDesc] = useState(task ? task.desc : '')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    const handleSubmit = (e) => {
        
        e.preventDefault()
        if(taskFormUpdate){
            onUpdate(task.id, title, desc)
        }
        else{
            onCreate(title, desc)
        }
        
        setTitle('')
        setDesc('')
    }
    
  return (
    
    <div>
        {taskFormUpdate ? 
        <div className='form-update'>
            <h3>Update task below</h3>
            <form className='taskForm'>
                <label>Edit Title</label>
                <input value={title} onChange={handleChange}/>
                <label>Edit Description</label>
                <textarea rows={5} value={desc} onChange={handleDescChange}></textarea>
                <button className='updateButton' onClick={handleSubmit}>Edit Task</button>
                <br />
            </form>
        </div> 
        : 
        <div className='form-container'>
            <h3>Add tasks using the form below</h3>
            <form className='taskForm'>
                <label>Title</label>
                <input value={title} onChange={handleChange}/>
                <label>Description</label>
                <textarea rows={5} value={desc} onChange={handleDescChange}></textarea>
                <button className='createButton' onClick={handleSubmit}>Add Task</button>
                <br />
                <p>**********************************************************</p>
            </form>
        </div>}

    </div>
    
  )
}

export default TaskCreate