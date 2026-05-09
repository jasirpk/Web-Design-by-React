import React from 'react'
import './ListTask.css'

const ListTask = ({ task , removeTask, index}) => {
  return (
    <>
      <div className='list-task'>{task.title}
        <button className='delete-btn' onClick={() => removeTask(index)}>Delete</button>
      </div>
    </>
  )
}

export default ListTask