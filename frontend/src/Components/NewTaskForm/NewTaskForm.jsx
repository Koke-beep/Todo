/* eslint-disable no-debugger */
import React, { useState } from 'react';

import './NewTaskForm.scss';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Categories from './Categories/Categories';
import { addNewTask } from '../../Redux/Actions/ActionCreator';

function newTaskForm({ actions }) {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));
  const [taskInfo, setTaskInfo] = useState({
    todo: '',
    priority: '',
    date: '',
  });

  function toggleView(open) {
    let taskListBox = document.querySelector('.taskList__newTask');

    taskListBox = open === true ? taskListBox.style.bottom = '0'
      : taskListBox.style.bottom = '-88vh';
    return taskListBox;
  }

  function transformDate(taskDate) {
    const dateMatrix = taskDate.split(' ');
    const mutatedDate = dateMatrix.slice(0, 5).join(' ');
    return mutatedDate;
  }

  function submitFormNewTask() {
    document.querySelector('.taskList__fields').reset();

    actions.addNewTask(taskInfo);
    setTaskInfo({ todo: '', priority: '', date: '' });
    toggleView(false);
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
                onChange={(e) => setTaskInfo({ ...taskInfo, todo: e.target.value })}
              />
            </label>
          </form>
          <Categories />
          <div className="taskList__date">
            <h5>Date</h5>
            <DatePicker
              selected={startDate}
              onChange={(day) => {
                const newDateTransformed = transformDate(day.toString());

                setStartDate(day);
                setTaskInfo({ ...taskInfo, date: newDateTransformed });
              }}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <div className="taskList__priority">
            <h5>Priority</h5>
            <select onChange={(e) => {
              setTaskInfo({ ...taskInfo, priority: e.target.value });
            }}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="taskList__open"
          onClick={() => {
            submitFormNewTask();
          }}
        >
          +
        </button>
        <button
          className="taskList__close"
          type="button"
          onClick={() => {
            toggleView(false);
          }}
        >
          x
        </button>
      </div>

    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addNewTask }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(newTaskForm);
