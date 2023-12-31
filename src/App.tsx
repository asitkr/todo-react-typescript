import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask []>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task') {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  }

  console.log(todoList)

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(task => task.taskName !== taskNameToDelete))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input 
            type="text" 
            name='task'
            placeholder='Task...' 
            onChange={handleChange} />
          <input 
            type="number" 
            name='deadline'
            placeholder='Deadline (in Days)...' 
            onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="todoList">
        {
          todoList.map((task: ITask, key: number) => (
            <TodoTask task={task} key={key} completeTask={completeTask} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
