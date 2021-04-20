/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
import React from 'react';
import './NewTaskForm.scss';

export default function newTaskForm() {
  function openNewTask() {
    const newTask = document.querySelector('.taskList__newTask').style.top = '-500px';
    console.log(newTask);
  }

  return (
    <div className="taskList__newTask">
      <button type="button" onClick={() => openNewTask()}>+</button>
      <h1 className="prueba">hi</h1>
    </div>
  );
}
