/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
import React, { useState } from 'react';
import './NewTaskForm.scss';

export default function newTaskForm() {
  const [textHolder, setTextHolder] = useState(' ');

  function toggleView(open) {
    let taskListBox = document.querySelector('.taskList__newTask');

    taskListBox = open === true ? taskListBox.style.bottom = '93vh'
      : taskListBox.style.bottom = '0';
    return taskListBox;
  }

  return (
    <>
      <div className="taskList__newTask">
        <button type="button" onClick={() => toggleView(true)}>+</button>
        <div className="taskList__data">
          <form className="taskList__fields">
            <label>
              Description
              <input type="text" value={textHolder} onChange={(e) => setTextHolder(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <button className="taskList__close" type="button" onClick={() => toggleView(false)}><p>+</p></button>
      </div>
    </>
  );
}
