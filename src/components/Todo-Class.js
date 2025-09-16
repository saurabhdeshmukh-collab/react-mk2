import React, { Component } from "react";

class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ""
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addTodo = () => {
    if (this.state.inputValue.trim() === "") return;
    this.setState((prev) => ({
      todos: [...prev.todos, prev.inputValue],  // still not getting, focus on this!
      inputValue: ""
    }));
  };

  render() {
    return (
      <div>
        <h2>Class based Component Todo</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Add a todo"
        />
        <button onClick={this.addTodo}>Add</button>

        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoClass;
