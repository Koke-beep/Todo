/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
import React from 'react';
import './TaskList.scss';

export default function taskList() {
  function openNewTask() {
    const newTask = document.querySelector('.taskList__newTask').style.top = '-500px';
    console.log(newTask);
  }

  return (
    <>
      <section id="taskList__box">
        <div className="taskList__categories">
          <button type="button">PRIORITIES</button>
          <button type="button">TASK</button>
          <button type="button">PROJECTS</button>
        </div>

        <div className="taskList__detail">
          <div>
            <span>7.30 am</span>
            <button type="button">Revisi maining revisi</button>
          </div>
        </div>

        <div className="taskList__newTask">
          <button type="button" onClick={() => openNewTask()}>+</button>
          <h1 className="prueba">hi</h1>
        </div>
      </section>
    </>
  );
}
