import React, { useRef, useState } from "react";

function TodoFunction() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if (value === "") return;

    setTodos([...todos, value]);
    inputRef.current.value = ""; // reset here
  };

  return (
    <div>
      <h2>Function based Component Todo</h2>
      <input type="text" ref={inputRef} placeholder="Add a todo" />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoFunction;
