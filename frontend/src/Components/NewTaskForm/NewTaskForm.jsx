/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './NewTaskForm.scss';
import DatePicker from 'react-datepicker';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

export default function newTaskForm() {
  const [textHolder, setTextHolder] = useState(' ');

  function toggleView(open) {
    let taskListBox = document.querySelector('.taskList__newTask');

    taskListBox = open === true ? taskListBox.style.bottom = '93vh'
      : taskListBox.style.bottom = '30vh';
    return taskListBox;
  }
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));

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
          </form>

          <div className="taskList__categories">
            <div className="category">
              <div className="taskList__color" />
              <label htmlFor="challenge">
                Daily challenge
                <input type="radio" id="challenge" name="action" value="daily challenge" />
              </label>
            </div>
            <div className="category">
              <div className="taskList__color" />
              <label htmlFor="healthy">
                Healthy
                <input type="radio" id="healthy" name="action" value="healthy" />
              </label>
            </div>
            <div className="category">
              <div className="taskList__color" />
              <label htmlFor="sport">
                Sport
                <input type="radio" id="sport" name="action" value="sport" />
              </label>
            </div>
            <div className="category">
              <div className="taskList__color" />
              <label htmlFor="education">
                Education
                <input type="radio" id="education" name="action" value="education" />
              </label>
            </div>
            <div className="category">
              <div className="taskList__color" />
              <label htmlFor="work">
                Work
                <input type="radio" id="work" name="action" value="work" />
              </label>
            </div>
          </div>

          <div className="taskList__date">
            <h5>Date</h5>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
        </div>
        <button className="taskList__close" type="button" onClick={() => toggleView(false)}>x</button>
      </div>

    </>
  );
}
