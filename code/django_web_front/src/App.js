import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
    this.getTodo();
  }

  getTodo() {
    let todoData;
    axios
      .get('http://0.0.0.0:8000/api/todos/')
      .then(res => {
        todoData = res.data;
        this.setState({
          todos: todoData,
        })
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <label>Add</label>
          <input type="text"></input>
        </div>
        <div>
          <h2>一覧</h2>
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
