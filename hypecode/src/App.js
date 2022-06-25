import './App.css';
import favicon from './assets/favicon.ico'
import Helmet from "react-helmet";
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const deleteTask = index => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks([...updatedTasks])
  }

  const completeTask = e => {
    if (e.target.style.backgroundColor === 'grey') {
      e.target.style.backgroundColor = ""
    }
    else e.target.style.backgroundColor = 'grey'
  }

  const saveInput = e => {
    setInput(e.target.value);
  };

  const handleTask = () => {
    const newTask = tasks
    newTask.push(input)
    setTasks([...newTask])
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleTask()
    }
  }

  return (
    <div className="App">
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>

      <div className='app-addTask'>
        <input className='app-input' placeholder='Your task' type="text" onKeyUp={e => handleKeyUp(e)} onChange={e => saveInput(e)} />
        <button onClick={handleTask}>Add your task !</button>
      </div>

      {/* {tasks.concat().sort((a, b) => b - a).reverse().map((value, index) => ( */}
      <div className='app-taskBoard'>
        {tasks.map((value, index) => (
          <div className="app-tasks">
            <div className='app-task'>
              {value}
            </div>
            <div className='app-buttons'>
              <button onClick={completeTask}>Complete</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
