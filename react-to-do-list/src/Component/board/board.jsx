import React, { useState } from 'react';
import "./board.css";
import Card from '../card/card';

export default function Board({}) {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([
      ...todos,
      { task},
    ]);
  }
  return (
    <div className='board'>
      <h1>Get Things Done !</h1>
      <button className='todo-btn'>Add Task</button>
{todos.map((task, index) => (
  <Card key={index} task={task} />
))}

    </div>
  );
}
