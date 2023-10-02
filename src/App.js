import React, { useState, useRef } from "react";
import { FaPlus } from 'react-icons/fa';
import List from './components/List/List';

function App() {
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task.length + 1,
      task: inputRef.current.value,
      complete: false,
    };
    setTask([...task, newTask]);
    e.target.reset();
  };

  const handleCompleteClick = (id) => {
    setTask((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        }
        return task;
      });
    });
  };

  const removeItem = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <section>
          <div className="add-task">
            <form onSubmit={submit}>
              <input ref={inputRef} type="text" placeholder="Add your Task..." />
              <button type="submit">
                <FaPlus />
              </button>
            </form>
          </div>
          <div className='list'>
            <List handleCompleteClick={handleCompleteClick} tasks={task} remove={removeItem} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
