import React, { Component } from 'react';
import './App.css';
import TaskItem from './task-item'

class App extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h3>TODO</h3>
        <div>
          <TaskItem description="First thing" />
          <TaskItem description="Second thing" />
        </div>
        <h3>DONE</h3>
        <div>
          <TaskItem description="Third thing done" />
        </div>
      </div>
    );
  }
}

export default App;
