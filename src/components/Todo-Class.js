import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/store";
import { useTheme } from "./ThemeContext";

function TodoFunc() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  const handleChange = (e) => setInputValue(e.target.value);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h2>Todos (Theme: {theme})</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoFunc;
