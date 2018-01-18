import React from 'react';

export default class TaskItem extends React.Component {
  render() {
    return (
      <div>
        <span role="img" aria-label="Mark as done">✅</span> First thing to do
      </div>
    );
  }
}
