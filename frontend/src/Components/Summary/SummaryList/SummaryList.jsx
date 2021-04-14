/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './SummaryList.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadTodo from '../../../Redux/Actions/ActionCreator';

function SummaryList({ data: { taskStatus }, actions }) {
  useEffect(() => {
    actions.loadTodo();
  }, []);

  return (
    <div id="summary__list">
      {taskStatus ? (
        Object.entries(taskStatus).map((task) => {
          if (typeof task[1] !== 'object') {
            return (
              <div key={task[0]} className="summary__sectionBox">
                <p className="summary__list-subtitle">{task[0]}</p>
                <span className="summary__list-done">{task[1]}</span>
              </div>
            );
          }
          return (
            <div key={task[0]} className="summary__sectionBox">
              <p className="summary__list-subtitle">{task[0]}</p>
              <span className="summary__list-done">{task[1].done}</span>
              <span className="summary__list-total">
                /
                {task[1].unfinished}
              </span>
            </div>
          );
        })) : (<></>)}
    </div>
  );
}

function mapStateToProps({ taskStatus }) {
  return {
    data: taskStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodo }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryList);
