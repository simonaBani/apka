import React, { Component } from "react";
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

import Todo from "../components/Todo";
import FakeAdd from '../components/FakeAdd'
import moment from "moment";


class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    
    return (
      <Masonry className="todos">

        <div className="todo">
          
            
         
            <FakeAdd />
        
        
       </div>

        {todos.map((todoData) => {
          const handleFinishTodo = () => {
            todoData.finished = true;
            Todo.finishedAt = moment().format();
            Todo.startedAt = moment().format();
            this.props.onEdit(todoData);
          };

          const handleRemoveTodo = () => {
            this.props.onRemove(todoData);
          };

          return (
            <Todo
              todo={todoData}
              key={todoData.id}
              onFinish={handleFinishTodo}
              onRemove={handleRemoveTodo}
              
            
            />
            
          );
        })}
      </Masonry>
    );
  }
}

export default TodoList;
