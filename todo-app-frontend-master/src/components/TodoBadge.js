import React from 'react';
// import { Badge } from 'reactstrap';
// import Moment from 'react-moment';

var moment = require('moment');

class TodoBadge extends React.Component {
render () {
        const { createdAt, finished } = this.props.todo;
        //nov je cas(sama si si nazvala a moment() je aktualny cas zo systemu
        var now = moment();
        var createdTime = moment(createdAt);
        var difference = now.diff(createdTime, 'minutes');

        var myBadge = (difference < 5 && !finished) ? <span class="badge badge-warning" 
        style={{ margin: "1em"}}>New</span> :null;
 
    
        
        // if (!finished) {

        //      NewBadge = (
        //     <h5><Badge color="warning">New</Badge></h5>
        //     )
        // }

       
        




        return myBadge;
    }

}

export default TodoBadge