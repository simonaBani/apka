import React from 'react';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';


class FakeAdd extends React.Component {
  render() {
   
    


    return (
   
       <div className="card" onClick={this.props.onFakeAddButton}>
         <Link className="linkPlus" to="/add">
                 <GoPlus size='70' /> 
                 <p id="txt">Add New Task</p>
           </Link>
        </div>
        
  


    
    )
  }
}

export default FakeAdd;