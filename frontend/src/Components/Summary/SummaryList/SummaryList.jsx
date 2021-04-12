import React from 'react';
import './SummaryList.scss';

export default function Summarylist() {
  return (
    <div id="summary__list">
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Ongoing</p>
        <span className="summary__list-done">16</span>
      </div>
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Overdue</p>
        <span className="summary__list-done">16</span>
      </div>
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Task</p>
        <span className="summary__list-done">63</span>
        <span className="summary__list-total">/99</span>
      </div>
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Projects</p>
        <span className="summary__list-done">9</span>
        <span className="summary__list-total">/13</span>
      </div>
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Reminder</p>
        <span className="summary__list-done">44</span>
        <span className="summary__list-total">/45</span>
      </div>
      <div className="summary__sectionBox">
        <p className="summary__list-subtitle">Notes</p>
        <span className="summary__list-done">167</span>
      </div>
    </div>
  );
}
