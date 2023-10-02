import React from "react";
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

function List(props) {
  return (
    <>
      <ul className="task-list">
        { 
        props.tasks.map((task) => (
        <li key={task.id}>
          <p className={task.complete ? 'complete' : ''}>{task.task}</p>
          <Button {...task} handleComplete={props.handleCompleteClick} remove={props.remove} />
        </li>
        ))
        }
      </ul>
    </>
  );
}

function Button({ handleComplete, complete, id, remove }) {
  return (
    <div className="btn-container">
      <button className={complete ? 'complete' : ''} onClick={() => handleComplete(id)}>
        <FaCheck />
      </button>
      <button>
        <RiDeleteBack2Fill onClick={() => remove(id)}/>
      </button>
    </div>
  );
}

export default List;
