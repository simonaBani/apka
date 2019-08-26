import React, { Component } from 'react';
// import Moment from 'react-moment';
import moment from 'moment';
import { GoNoNewline } from 'react-icons/go';


class TodoButtons extends Component {
  render () {
    const { finished, finishedAt, startedAt } = this.props.todo;
    let finishButton;
    let finishedAtTime;
    if (!finished) {
      finishButton = (
        <button type="button" className="btn btn-success float-right" onClick={this.props.onFinish}>
          Dokončiť
        </button>
      ) 
    }

    
    return (
      <>
        <button type="button" className="btn btn-info" onClick={this.props.onRemove}>
          Zmazať
        </button>
          <button type="button" className="close" aria-label="Close" onClick={this.props.onRemove}>
            <span aria-hidden="true">&times;</span>
          </button>
        {finishButton}
        {finishedAtTime}
      </>
    )
  }

}


export default TodoButtons
