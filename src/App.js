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
          <TaskItem description="First thing" isDone={false} />
          <TaskItem description="Second thing" isDone={false} />
        </div>
        <h3>DONE</h3>
        <div>
          <TaskItem description="Third thing done" isDone={true} />
        </div>
      </div>
    );
  }
}

export default App;
