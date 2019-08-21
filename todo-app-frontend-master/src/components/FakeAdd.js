import React from 'react';
import { GoPlus } from 'react-icons/go';


class FakeAdd extends React.Component {
  render() {
   
    


    return (
        <>
       <div className="card">
            <button type="button" className="card goButton" onClick={this.props.onFakeAddButton}>
                 <GoPlus size='70' /> 
                 <p id="txt">Add New Task</p>
            </button>
        </div>
        
      </>


    
    )
  }
}

export default FakeAdd;