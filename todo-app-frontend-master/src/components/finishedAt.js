import React, { Component } from 'react';
import moment from 'moment';

class FinishedAtModule extends Component {
    render () {
        const { finishedAt, finished } = this.props.todo;
        let finishedAtTime;

        if (finished) {
            finishedAtTime = (
              <div className = "card-footer text-muted">
              Finished at  {moment(finishedAt).format('MMMM DD YYYY, h:mm:ss a')}
              </div>
            )
          } 

          return (

            {finishedAtTime}

          )
    }
}

export default FinishedAtTime