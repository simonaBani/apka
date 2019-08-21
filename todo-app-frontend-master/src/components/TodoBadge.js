import React from 'react';
import { Badge } from 'reactstrap';

var moment = require('moment');

class TodoBadge extends React.Component {

    render () {
        const { createdAt, finished } = this.props.todo;
        let NewBadge = null;
        // const diff = moment() - moment(createdAt);
        // if (moment.duration(diff).asMinutes() < 1) {
        //     return (
        //         <div>
        //         new  </div>
        //     )
        // }

        
    
        
        if (!finished) {

             NewBadge = (
            <h5><Badge color="warning">New</Badge></h5>
            )
        }

        // if ( moment(createdAt) > )

        




        return NewBadge;
    }

}

export default TodoBadge