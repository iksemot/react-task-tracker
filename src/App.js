import React, { Component } from 'react';
import './App.css';
import TasksList from './tasks-list'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: [
        {id: 1, description: 'First thing', isDone: false },
        {id: 2, description: 'Second thing', isDone: false },
        {id: 3, description: 'Third thing', isDone: true }
      ]
    }

  }

  render () {
    return (
      <div>
        <input type="text" />
        <h3>TODO</h3>
        <TasksList tasks={this._filterTasksTodo()} />

        <h3>DONE</h3>
        <TasksList tasks={this._filterTasksDone()} />
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
