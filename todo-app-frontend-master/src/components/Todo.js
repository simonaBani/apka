import React, { Component } from "react";

import axios from "../axios";

import TodoButtons from "./TodoButtons";
import TodoBadge from "./TodoBadge";
import TimeAgo2 from '../components/TimeAgo2';
import moment from 'moment';


class Todo extends Component {
  renderText = () => {
    const { text } = this.props.todo;
    if (!text) return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
    );
  };

  handleFinish = async () => {
    const finishedAt = moment();
    await axios.patch("/todos/" + this.props.todo.id, {
      finished: true,
      finishedAt: finishedAt
    });
    this.props.onFinish(finishedAt);
     };

  handleRemove = async () => {
    await axios.delete("/todos/" + this.props.todo.id);
    this.props.onRemove();
  };

  

  render() {
    const { createdAt, title, finished, finishedAt, startedAt, deadline, importance } = this.props.todo;
    
    let classes = "card";
    let finishedAtTime; 
    
    if (finished) classes += " myBorder"; 
   
    if (!finished) classes += " myBorder2";

    if (moment(deadline).isBefore(moment())) classes += " deadlinePath"   

    if (finished) {
      finishedAtTime = (
        <div className = "card-footer text-muted">
        Finished at  {moment(finishedAt).format('MMMM DD YYYY, h:mm:ss a')}
        </div>
      )
    } 

   



    
    return (
      <div className="wrapper">
      <div className="todo mb-2">
        <div className={classes}>
          <div className="card-body">
            <h5 className="card-title">{title} 
             <TodoBadge
              todo={this.props.todo}
             
              /></h5>
           
            <h6 className="card-subtitle text-muted mb-2">
              Created at {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </h6>
            {this.renderText()}
            
            <div className="deadliner">
              Deadline is {moment(deadline).format('MMMM Do YYYY')}
             </div>
           
             
             <TodoButtons
              todo={this.props.todo}
              onFinish={this.handleFinish}
              onRemove={this.handleRemove}
                                   
              />
            
             <div className="starter">
               Started {moment(startedAt).fromNow()} 
             </div> 
          </div>
          
          <div className="finishik">
            {finishedAtTime}
          </div>
          
          <div className="card=footer text-muted">
              {importance === "urgent" ? <div className="urgentik" /> : null}
              {importance === "high" ? <div className="highik" /> : null}
              {importance === "medium" ? <div className="mediumik" /> : null}
              {importance === "low" ? <div className="lowik" /> : null}{" "}
              {importance}

          </div>
           
          
      </div>
    </div>
    </div>
      
    
    );
  }
}

export default Todo;
