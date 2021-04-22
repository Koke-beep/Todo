/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadCategories } from '../../../Redux/Actions/ActionCreator';

function Categories({ categories, actions }) {
  useEffect(() => {
    actions.loadCategories();
  }, []);

  return (
    <div className="taskList__categories">
      {categories && categories.map((cat) => (
        <div className="category" key={cat[0]}>
          <div className="taskList__color" style={{ background: cat[1] }} />
          <label htmlFor={cat[0].toLowerCase()}>
            {cat[0]}
            <input
              id={cat[0].toLowerCase()}
              type="radio"
              name="action"
              value={cat[0].toLowerCase()}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps({ categories }) {
  return {
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadCategories }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
