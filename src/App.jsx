import React from "react";
import JsPlayground from "./jsPlayground.js";
import TodoClass from "./components/Todo-Class.js";
import TodoFunction from "./components/Todo-Function.js";
import "./App.css"
 
export default function App() {
  return (
<div>
      <h1>Day 5 – React Lifecycle and hooks</h1>
      {/* <JsPlayground /> */}
      <TodoClass />
      <hr />
      <TodoFunction />
    </div>
  );
  
} 