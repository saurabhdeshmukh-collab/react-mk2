import React from "react";
import JsPlayground from "./jsPlayground.js";
import TodoClass from "./components/Todo-Class.js";
import TodoFunction from "./components/Todo-Function.js";
 
export default function App() {
  return (
<div>
      <h1>Day 4 – React fundamentals</h1>
      {/* <JsPlayground /> */}
      <TodoClass />
      <hr />
      <TodoFunction />
    </div>
  );
  
} 