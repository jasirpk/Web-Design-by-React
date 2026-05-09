import React, { useEffect, useState } from 'react'
import './Todo.css'
import AddTask from '../AddTask/AddTask';
import ListTask from '../ListTask/ListTask';

const Todo = () => {
  const [tasks, setTasks] = useState([
    {title: 'Learn React'},
    {title: 'Learn Css'},
    {title: 'Learn Javascript'},
  ]);
  useEffect(()=>{
    document.title = `You have ${tasks.length} tasks`;
  }, [tasks.length])
  const addTask = (task) => {
    const newTasks = [...tasks, {title: task}];
    setTasks(newTasks);
  }
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
          <AddTask addTask={addTask} />
        </div>
        <div className='tasks'>
          {tasks.map((task, index) => (
            <ListTask key={index} task={task} removeTask={removeTask} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Todo
