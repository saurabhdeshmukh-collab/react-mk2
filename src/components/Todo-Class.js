import React, { Component, useState, useEffect } from "react";
import TodoFunction from "./Todo-Function";
import useWindowSize from "./custom-hook"
// class TodoClass extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ""
    };
  }*/
function TodoFunc() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);  

  ////--------------------------------using custom hook         
  const windowSize = useWindowSize(); 
  

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };
  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos((prev) => [...prev, inputValue]); 
    setInputValue("");
  };


////------------------Timer with useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const removeTodo = (indexToRemove) => {
  const newTodos = todos.filter((todo, index) => {
    return index !== indexToRemove;
  });
  setTodos(newTodos);
};
    return (
      <div>
        <h2>Class based Component transpiled into function based Component</h2>
              <h2>Todos (Window: {windowSize.width} x {windowSize.height})</h2>
      <p>Timer: {count} secs</p>
            <p>📏 Window size: {windowSize.width} x {windowSize.height}</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} {" "}
            <button onClick = {() =>
              removeTodo(index)
            }> remove dis </button>
            </li> //used map cuz why not 
          ))}
        </ul>
      </div>
    );
  }


export default TodoFunc;
