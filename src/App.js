import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h3>TODO</h3>
        <div>
          <div><span role="img" aria-label="Mark as done">✅</span>  First thing to do</div>
          <div><span role="img" aria-label="Mark as done">✅</span> Second thing to do</div>
        </div>
        <h3>DONE</h3>
        <div>
          <div>Third thing done</div>
        </div>
      </div>
    );
  }
}

export default App;
