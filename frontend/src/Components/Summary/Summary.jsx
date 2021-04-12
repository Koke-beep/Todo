import React from 'react';
import './Summary.scss';

import SummaryList from './SummaryList/SummaryList';

export default function Summary() {
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
          <span className="summary__percentage">90%</span>
        </div>
        <progress value="65" max="100" />
      </div>
      <SummaryList />
    </section>
  );
}
