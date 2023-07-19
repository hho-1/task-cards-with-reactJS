import React from 'react'
import { useState } from 'react'

const TaskCreate = ({onCreate}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    const handleSubmit = (e) => {
        
        e.preventDefault()
        onCreate(title, desc)
        setTitle('')
        setDesc('')
    }
    
  return (
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
    </div>
  )
}

export default TaskCreate