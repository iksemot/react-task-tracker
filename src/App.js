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

    this._handleKeyPress = this._handleKeyPress.bind(this)
    this._markTaskAsDone = this._markTaskAsDone.bind(this)
  }

  render () {
    return (
      <div>
        <input type="text" onKeyPress={this._handleKeyPress} />
        <h3>TODO</h3>
        <TasksList
          tasks={this._filterTasksTodo()} 
          markTaskAsDone={this._markTaskAsDone}/>

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

  _handleKeyPress (e) {
    if (e.key.toLowerCase() !== 'enter') return
    
    const tasks = this.state.tasks.slice()
    tasks.push({
      id: this.state.tasks.length+1, 
      description: e.target.value,
      isDone: false
    })

    this.setState({tasks: tasks})

    e.target.value = ''
  }

  _markTaskAsDone (id) {
    const tasks = this.state.tasks.slice()
    const task = tasks.find(task => task.id === id)
    task.isDone = true

    this.setState({tasks: tasks})
  }
}

export default App;
