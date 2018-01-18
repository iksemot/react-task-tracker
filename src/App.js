import React, { Component } from 'react';
import './App.css';
import TaskItem from './task-item'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: [
        {description: 'First thing', isDone: false },
        {description: 'Second thing', isDone: false },
        {description: 'Thids thing', isDone: true }
      ]
    }

  }

  render() {
    return (
      <div>
        <input type="text" />
        <h3>TODO</h3>
        <div>
          {this._filterTasksTodo().map(task => <TaskItem description={task.description} isDone={task.isDone} />)}
        </div>
        <h3>DONE</h3>
        <div>
          {this._filterTasksDone().map(task => <TaskItem description={task.description} isDone={task.isDone} />)}
        </div>
      </div>
    );
  }

  _filterTasksDone () {
    return this.state.tasks.filter(task => task.isDone === true)
  }

  _filterTasksTodo () {
    return this.state.tasks.filter(task => task.isDone === false)
  }
}

export default App;
