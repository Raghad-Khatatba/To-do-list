// popup.js
import React, { useState } from "react";
import "./poupup.css";

export default function Popup({ togglePopup, addTodo }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    addTodo(task);
    togglePopup();
  };

  return (
    <div className="Popup-overlay">
      <div className="Popup-content">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="Todo-input"
          placeholder="What is the task today?"
        />
        <div>
          <button className="Todo-btn" onClick={togglePopup}>
            Cancel
          </button>
          <button className="Todo-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
