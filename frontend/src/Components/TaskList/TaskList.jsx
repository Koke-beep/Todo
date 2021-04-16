import React from 'react';
import './TaskList.scss';

export default function taskList() {
  return (
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
      <div className="taskList__detail--new">

        <button type="button">+</button>

      </div>
    </section>
  );
}
