import React, { useState } from "react";
import "./board.css";
import Card from "../Card/Card";
import Popup from "../Poupup/Poupup";

export default function Board({}) {
  const [todos, setTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="Board">
      <h1>Get Things Done !</h1>
      <button className="Todo-btn" onClick={openPopup}>
        Add Task
      </button>
      {isPopupOpen && (
        <Popup  onClose={closePopup} addTodo={addTodo} />
      )}

      {todos.map((task, index) => (
        <Card key={index} task={task} />
      ))}
    </div>
  );
}
