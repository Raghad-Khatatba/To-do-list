import React, { useState } from "react";
import "./card.css";

export default function Card({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div
      className={`Todo ${isCompleted ? "Completed" : "Incompleted"}`}
      onClick={toggleCompleted}
    >
      <p>{task.task}</p>
    </div>
  );
}
