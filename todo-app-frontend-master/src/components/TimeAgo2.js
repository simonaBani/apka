import React from 'react';
import Moment from 'react-moment'; 
import moment from 'moment' ;

class TimeAgo2 extends React.Component {

    render () {
        const { createdAt, finished } = this.props.todo;
        let newTimeik = null;
        if (!finished) {

            newTimeik = (    
                <p>
                    Started ago - 
        
                    {/* {moment(createdAt).fromNow()} */}

                <Moment date= {createdAt} durationFromNow  />

                    
                </p>
            ) 

        } else {
            newTimeik = (
                <p>Already done</p>
            )
        }

        
      

    

    return newTimeik;
}
}


export default TimeAgo2
