/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './SummaryList.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadTodo from '../../../Redux/Actions/ActionCreator';

function SummaryList({ data: { taskStatus }, actions }) {
  debugger;
  console.log('Status', taskStatus);

  useEffect(() => {
    debugger;
    actions.loadTodo();
  }, []);

  return (

    <div id="summary__list">
      {taskStatus ? (
        <>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Ondoing</p>
            <span className="summary__list-done">{taskStatus?.ondoing}</span>
          </div>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Overdue</p>
            <span className="summary__list-done">a</span>
          </div>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Task</p>
            <span className="summary__list-done">a</span>
            <span className="summary__list-total">
              /s
            </span>
          </div>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Projects</p>
            <span className="summary__list-done">j</span>
            <span className="summary__list-total">
              /l
            </span>
          </div>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Reminder</p>
            <span className="summary__list-done">r</span>
            <span className="summary__list-total">
              /u
            </span>
          </div>
          <div className="summary__sectionBox">
            <p className="summary__list-subtitle">Notes</p>
            <span className="summary__list-done">n</span>
          </div>
        </>
      ) : (<div />)}

    </div>
  );
}

function mapStateToProps({ taskStatus }) {
  debugger;
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
