import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

class AddTodo extends Component {
  state = {
    title: "",
    text: "",
    deadline: new Date(),
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.onAdd(this.state);
    this.setState({
      title: '',
      text: '',
      deadline: new Date(),
    });
    this.props.history.push("/");
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDate = (date) => {
    this.setState({
      deadline: date
    });
  }

  
    render() {
    const { title, text, deadline } = this.state;

      
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Title"
          required
        />
        <textarea
          name="text"
          value={text}
          onChange={this.handleChange}
          className="form-control mb-2"
          placeholder="Text"
        />
        
        <div className="datumovnicek">
        
        <DatePicker
                selected={deadline}
                onChange={this.handleDate}
                 
                />
        </div>
        
        
        <button
          type="submit"
          className="btn btn-outline-success"
          disabled={!title}
        >
          Save
        </button>
         
      </form>
      
      
        
      
    
    );
  }
}

export default withRouter(AddTodo);
