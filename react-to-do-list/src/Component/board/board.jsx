import React, { useState } from "react";
import "./board.css";
import Card from "../Card/Card";

export default function Board({}) {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };
  return (
    <div className="Board">
      <h1>Get Things Done !</h1>
      <button className="Todo-btn">Add Task</button>
      {todos.map((task, index) => (
        <Card key={index} task={task} />
      ))}
    </div>
  );
}
