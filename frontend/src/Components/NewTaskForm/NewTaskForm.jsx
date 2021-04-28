import React, { useState } from 'react';

import './NewTaskForm.scss';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import Categories from './Categories/Categories';

export default function newTaskForm() {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));
  const [taskInfo, setTaskInfo] = useState({
    task: '',
    priority: '',
    date: '',
  });

  function toggleView(open) {
    let taskListBox = document.querySelector('.taskList__newTask');

    taskListBox = open === true ? taskListBox.style.bottom = '0'
      : taskListBox.style.bottom = '-88vh';
    return taskListBox;
  }

  return (
    <>
      <div className="taskList__newTask">
        <button type="button" onClick={() => toggleView(true)}>+</button>
        <div className="taskList__data">
          <form className="taskList__fields">
            <label htmlFor="depcription">
              Description
              <input
                type="text"
                required
                placeholder="Write here..."
                name="task"
                onChange={(e) => setTaskInfo({ ...taskInfo, task: e.target.value })}
              />
            </label>
          </form>
          <Categories />
          <div className="taskList__date">
            <h5>Date</h5>
            <DatePicker
              selected={startDate}
              onChange={(day) => {
                setStartDate(day);
                setTaskInfo({ ...taskInfo, date: day });
              }}
              showTimeSelect
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 30), 17),
              ]}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <div className="taskList__priority">
            <h5>Priority</h5>
            <select onChange={(e) => setTaskInfo({ ...taskInfo, priority: e.target.value })}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="taskList__open"
          onClick={() => {
            toggleView(false);
          }}
        >
          +
        </button>
        <button className="taskList__close" type="button" onClick={() => toggleView(false)}>x</button>
      </div>

    </>
  );
}
