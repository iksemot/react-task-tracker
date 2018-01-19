import React from 'react';

export default class TaskInput extends React.Component {
  constructor (props) {
    super(props)

    this._handleKeyPress = this._handleKeyPress.bind(this)
  }
  render () {
    return (
      <div>
        <input type="text" onKeyPress={this._handleKeyPress} />
      </div>
    )
  }

  _handleKeyPress (e) {
    if (e.key.toLowerCase() !== 'enter') return
    
    this.props.afterKeyPress(e.target.value)
    e.target.value = ''
  }
}
