import React, { useState } from 'react'
import './AddTask.css'

const AddTask = ({ addTask }) => {
  const [value,setValue] = useState('');
  const addItem = () => {
    addTask(value);
  setValue('');
  }
  return (
    <>
    <div className='input-container'>
      <input className='input' type="text" placeholder='Add Task'
      value={value}
      onChange= {(e)=>{setValue(e.target.value)}}
       />
      <button onClick={addItem} className='button'>Add</button>
    </div>
        </>

  )
}

export default AddTask