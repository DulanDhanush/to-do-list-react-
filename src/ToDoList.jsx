import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Initialize Neural Link",
    "Calibrate Quantum Sensors",
    "Refuel Starship",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTask = (index, direction) => {
    const updatedTasks = [...tasks];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < tasks.length) {
      [updatedTasks[index], updatedTasks[targetIndex]] = [
        updatedTasks[targetIndex],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h1>STATION_TASKS</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Assign new objective..."
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button className="add-btn" onClick={addTask}>
            DEPLOY
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <div className="button-group">
                <button
                  className="icon-btn up"
                  onClick={() => moveTask(index, -1)}
                >
                  ▲
                </button>
                <button
                  className="icon-btn down"
                  onClick={() => moveTask(index, 1)}
                >
                  ▼
                </button>
                <button
                  className="icon-btn delete"
                  onClick={() => deleteTask(index)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
