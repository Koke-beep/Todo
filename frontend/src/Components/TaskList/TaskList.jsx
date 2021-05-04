import React, { useEffect } from 'react';
import './TaskList.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadTodo } from '../../Redux/Actions/ActionCreator';

function taskList({ todoList, actions }) {
  useEffect(() => {
    actions.loadTodo();
  }, []);
  return (
    <>
      <section id="taskList__box">
        <div className="taskList__categories">
          <button type="button">PRIORITIES</button>
          <button type="button">TASK</button>
          <button type="button">PROJECTS</button>
        </div>

        {todoList && todoList.map((task) => (
          <div className="taskList__detail" key={task.todo}>
            <div>
              <span>{task.date}</span>
              <button type="button">{task.todo}</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function mapStateToProps({ todoList }) {
  return {
    todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodo }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(taskList);
