import React from 'react';

export default class TaskItem extends React.Component {
  render() {
    return this.props.isDone
      ? this._renderDone()
      : this._renderTodo()
  }

  _renderDone () {
    return (
      <div>{this.props.description}</div>
    )
  }

  _renderTodo () {
    return (
        <div>
          <span role="img" aria-label="Mark as done">✅</span> 
          {this.props.description}
        </div>
    )
  }
}
