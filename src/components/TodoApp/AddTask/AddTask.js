import React from 'react'
import './AddTask.css'

const AddTask = () => {
  return (
    <>
    <div className='input-container'>
      <input className='input' type="text" placeholder='Add Task' />
      <button className='button'>Add</button>
    </div>
        </>

  )
}

export default AddTask