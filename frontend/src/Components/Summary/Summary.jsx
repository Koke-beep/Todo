/* eslint-disable no-console */
import React from 'react';
import './Summary.scss';

import SummaryList from './SummaryList/SummaryList';
import loadTodo from '../../Redux/Storage/InitialState';

export default function Summary() {
  const { Task, Project } = loadTodo.taskStatus;
  const percentageTask = (((Task.done + Project.done)
   / (Task.unfinished + Project.unfinished)) * 100).toFixed(1);

  return (
    <section id="summary__box">
      <div className="summary__header">
        <h6>Summary</h6>
        <select className="summary__options">
          <option value="today">Today</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="summary__goal">
        <div className="summary__completed">
          <p>Total Completed Goal</p>
          <span className="summary__percentage">
            {percentageTask}
            %
          </span>
        </div>
        <progress value={percentageTask} max="100" />
      </div>
      <SummaryList />
    </section>
  );
}
