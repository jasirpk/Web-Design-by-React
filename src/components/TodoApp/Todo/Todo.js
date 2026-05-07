import React from 'react'
import './Todo.css'
import AddTask from '../AddTask/AddTask';
import ListTask from '../ListTask/ListTask';

const Todo = () => {
  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
          <AddTask />
        </div>
        <div className='tasks'>
          <ListTask />

        </div>
      </div>
    </>
  )
}

export default Todo
